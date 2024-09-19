// import React, { useState } from 'react';
// import './Modal.css';

// const Modal = ({ isVisible, onClose, onConfirm, formData, bookingId }) => {
//     const [isConfirmed, setIsConfirmed] = useState(false);

//     if (!isVisible) return null;

//     const handleConfirm = () => {
//         setIsConfirmed(true); 
//         onConfirm();
//     };

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 {!isConfirmed ? (
//                     <>
//                         <h2>Confirm Your Booking</h2>
//                         <div className="modal-body">
//                             <p>Are you sure you want to book the appointment with the following details?</p>
//                             <ul>
//                                 <li><strong>Username:</strong> {formData.username}</li>
//                                 <li><strong>Phone Number:</strong> {formData.phoneNo}</li>
//                                 <li><strong>Address:</strong> {formData.address}</li>
//                                 <li><strong>Gender:</strong> {formData.gender}</li>
//                                 <li><strong>Age:</strong> {formData.age}</li>
//                                 <li><strong>Weight:</strong> {formData.weight} kg</li>
//                                 <li><strong>Height:</strong> {formData.height} cm</li>
//                                 <li><strong>Reason:</strong> {formData.reason}</li>
//                                 <li><strong>Date of Appointment:</strong> {formData.appointmentDate}</li>
//                             </ul>
//                         </div>
//                         <div className="modal-actions">
//                             <button onClick={handleConfirm}>Confirm</button>
//                             <button onClick={onClose}>Cancel</button>
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <h2>Booking Confirmed</h2>
//                         <div className="modal-body">
//                             <p>Thank you for booking an appointment!</p>
//                             <p><strong>Booking ID:</strong> {bookingId}</p>
//                             <p><strong>Username:</strong> {formData.username}</p>
//                             <p><strong>Appointment Date:</strong> {formData.appointmentDate}</p>
//                         </div>
//                         <div className="modal-actions">
//                             <button onClick={onClose}>Close</button>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Modal;
import React, { useState } from 'react';
import './Modal.css'; // Updated CSS file

const Modal = ({ isVisible, onClose, onConfirm, formData, bookingId }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    if (!isVisible) return null;

    const handleConfirm = () => {
        setIsConfirmed(true); 
        onConfirm();
    };

    return (
        <div className="modal-overlay-custom">
            <div className="modal-content-custom">
                {!isConfirmed ? (
                    <>
                        <h2>Confirm Your Booking</h2>
                        <div className="modal-body-custom">
                            <p>Are you sure you want to book the appointment with the following details?</p>
                            <ul>
                                <li><strong>Username:</strong> {formData.username}</li>
                                <li><strong>Phone Number:</strong> {formData.phoneNo}</li>
                                <li><strong>Address:</strong> {formData.address}</li>
                                <li><strong>Gender:</strong> {formData.gender}</li>
                                <li><strong>Age:</strong> {formData.age}</li>
                                <li><strong>Weight:</strong> {formData.weight} kg</li>
                                <li><strong>Height:</strong> {formData.height} cm</li>
                                <li><strong>Reason:</strong> {formData.reason}</li>
                                <li><strong>Date of Appointment:</strong> {formData.appointmentDate}</li>
                            </ul>
                        </div>
                        <div className="modal-actions-custom">
                            <button onClick={handleConfirm}>Confirm</button>
                            <button onClick={onClose}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2>Booking Confirmed</h2>
                        <div className="modal-body-custom">
                            <p>Thank you for booking an appointment!</p>
                            <p><strong>Booking ID:</strong> {bookingId}</p>
                            <p><strong>Username:</strong> {formData.username}</p>
                            <p><strong>Appointment Date:</strong> {formData.appointmentDate}</p>
                        </div>
                        <div className="modal-actions-custom">
                            <button onClick={onClose}>Close</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
