import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import './Appointments.css';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        username: '', 
        phoneNo: '',
        address: '',
        gender: '',
        age: '',
        weight: '',
        height: '',
        reason: '', 
        appointmentDate: '',
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [bookingId, setBookingId] = useState(''); // Store the bookingId

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Check if selected date is Sunday
    //     const selectedDate = new Date(formData.appointmentDate);
    //     const dayOfWeek = selectedDate.getDay();
    //     if (dayOfWeek === 0) {
    //         alert("Booking on Sundays is not allowed. Please select another date.");
    //         return;
    //     }

    //     try {
    //         const response = await axios.post('http://localhost:5000/api/appointments', formData);
    //         if (response.status === 201) {
    //             setBookingId(response.data.bookingId); // Set the bookingId from the server response
    //             setIsModalVisible(true);
    //         } else {
    //             console.error('Failed to save the appointment:', response.data);
    //             alert(`Failed to save the appointment: ${response.data.message}`);
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.status === 400) {
    //             alert(error.response.data.message);
    //         } else {
    //             console.error('There was an error saving the appointment!', error);
    //         }
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const today = new Date();
        const selectedDate = new Date(formData.appointmentDate);
        
        // Check if the selected date is in the past
        if (selectedDate < today.setHours(0, 0, 0, 0)) {
            alert("Booking an appointment on a past date is not allowed. Please select a valid date.");
            return;
        }
    
        // Check if selected date is Sunday
        const dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 0) {
            alert("Booking on Sundays is not allowed. Please select another date.");
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:5000/api/appointments', formData);
            if (response.status === 201) {
                setBookingId(response.data.bookingId); // Set the bookingId from the server response
                setIsModalVisible(true);
            } else {
                console.error('Failed to save the appointment:', response.data);
                alert(`Failed to save the appointment: ${response.data.message}`);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message);
            } else {
                console.error('There was an error saving the appointment!', error);
            }
        }
    };
    
    const handleCloseModal = () => {
        setIsModalVisible(false);
        if (window.confirm("Are you sure you want to cancel the booking?")) {
            alert("Booking Cancelled");
            window.location.reload(); 
        }
    };

    const handleConfirm = () => {
        setIsModalVisible(false);
        if (window.confirm("Do you want to confirm the booking?")) {
            alert("Booking Confirmed");
            window.location.reload(); 
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Form Fields */}
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Weight (kg):</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Height (cm):</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Reason for Booking:</label>
                    <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Reason</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Weight Gain">Weight Gain</option>
                        <option value="Diet Consultation">Diet Consultation</option>
                    </select>
                </div>
                <div>
                    <label>Appointment Date:</label>
                    <input
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Book Appointment</button>
            </form>

            <Modal
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onConfirm={handleConfirm}
                formData={formData}
                bookingId={bookingId} // Pass the bookingId to the modal
            />
        </>
    );
};

export default AppointmentForm;
