const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const User = require('./models/User');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for React app
app.use(cors({
    origin: 'http://localhost:3000', // Your React app's URL
}));

app.use(express.json()); // use express.json() instead of bodyParser.json()

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/userdetails-wellnessstudio';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes for authentication
app.use('/api/auth', authRoutes);

// Booking Counter Schema for managing sequential booking IDs
const BookingCounterSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Set _id to 'bookingId'
    sequence: { type: Number, default: 1 }, // Start from 1
});

const BookingCounter = mongoose.model('BookingCounter', BookingCounterSchema);

// Appointment Schema
const AppointmentSchema = new mongoose.Schema({
    bookingId: { type: String, required: true }, // New field for bookingId
    username: { type: String, required: true },
    phoneNo: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    reason: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

// POST route to create a new appointment with bookingId
app.post('/api/appointments', async (req, res) => {
    const { appointmentDate, ...restData } = req.body;

    try {
        // Check the number of appointments already booked for this date
        const count = await Appointment.countDocuments({ appointmentDate: new Date(appointmentDate) });

        if (count >= 3) {
            return res.status(400).json({ message: 'Maximum appointments for this date reached. Only 3 allowed per day.' });
        }

        // Find and update the booking counter, or create a new one if it doesn't exist
        let counter = await BookingCounter.findOneAndUpdate(
            { _id: 'bookingId' },
            { $inc: { sequence: 1 } },
            { new: true, upsert: true }
        );

        // Format the bookingId (e.g., 01, 02, 03, etc.)
        const formattedBookingId = String(counter.sequence).padStart(2, '0');

        // Save the appointment with the bookingId
        const newAppointment = new Appointment({
            ...restData,
            appointmentDate: new Date(appointmentDate), // Store appointment date as a Date object
            bookingId: formattedBookingId,
        });
        await newAppointment.save();

        // Respond with success and the bookingId
        res.status(201).json({ message: 'Appointment saved successfully', bookingId: formattedBookingId });
    } catch (error) {
        console.error('Failed to save appointment:', error);
        res.status(500).json({ message: 'Failed to save appointment' });
    }
});

// GET route to fetch all appointments
app.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json(appointments); // Include appointmentDate in the response
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({ message: 'Failed to fetch appointments' });
    }
});

// Weekly report route for appointments
app.get('/api/appointments/weekly-report', async (req, res) => {
    try {
        const result = await Appointment.aggregate([
            {
                $addFields: {
                    week: { $isoWeek: "$createdAt" },
                    year: { $isoWeekYear: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: {
                        week: "$week",
                        year: "$year",
                        reason: "$reason"
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { "_id.year": 1, "_id.week": 1 }
            }
        ]);

        res.status(200).json(result);
    } catch (error) {
        console.error('Error generating weekly report:', error);
        res.status(500).json({ message: 'Error generating report', error });
    }
});

// GET route to fetch appointments based on a specific date
app.get('/api/appointments/report', async (req, res) => {
    const { appointmentDate } = req.query;
    try {
        // Convert the appointmentDate to a Date object
        const startOfDay = new Date(appointmentDate);
        const endOfDay = new Date(appointmentDate);
        endOfDay.setUTCHours(23, 59, 59, 999); // Set the end of the day

        // Find appointments that fall within the specified date
        const appointments = await Appointment.find({
            appointmentDate: { $gte: startOfDay, $lte: endOfDay }
        }).select('username reason bookingId');

        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching appointments report:', error);
        res.status(500).json({ message: 'Failed to generate report' });
    }
});

// GET route to fetch all users
app.get('/getUsers', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
