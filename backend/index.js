const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const User = require('./models/User');

const app = express();

app.use(cors());
app.use(express.json()); // use express.json() instead of bodyParser.json()

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/userdetails-wellnessstudio';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/getUsers', (req, res) => {
    User.find() // used to display the details of users from MongoDB
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
