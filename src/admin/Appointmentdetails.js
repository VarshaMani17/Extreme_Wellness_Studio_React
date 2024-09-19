import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Userdetails.css'; // Import the CSS file

const AppointmentDetails = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/appointments');
                setAppointments(response.data);
            } catch (err) {
                setError('Failed to fetch appointments');
                console.error('Error fetching appointments:', err);
            } finally {
                setLoading(false);
            }
        };
        
        fetchAppointments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
            <h2>Appointment Details</h2>
            <div className="table-container">
                
                {appointments.length === 0 ? (
                    <p>No appointments found</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Username</th>
                                <th>Phone Number</th>
                                <th>Address</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Weight (kg)</th>
                                <th>Height (cm)</th>
                                <th>Reason for Booking</th>
                                <th>Date of Appointment</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment._id}>
                                    <td>{appointment.bookingId}</td>
                                    <td>{appointment.username}</td>
                                    <td>{appointment.phoneNo}</td>
                                    <td>{appointment.address}</td>
                                    <td>{appointment.gender}</td>
                                    <td>{appointment.age}</td>
                                    <td>{appointment.weight}</td>
                                    <td>{appointment.height}</td>
                                    <td>{appointment.reason}</td>
                                    <td>{appointment.appointmentDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AppointmentDetails;
