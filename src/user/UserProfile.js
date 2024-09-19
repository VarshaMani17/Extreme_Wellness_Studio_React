// import React, { useEffect, useState } from 'react';
// import './UserProfile.css'; // Import your CSS for general styles
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUsername = localStorage.getItem('username');
//         const storedPassword = localStorage.getItem('password');

//         if (storedUsername) {
//             setUsername(storedUsername);
//         }

//         if (storedPassword) {
//             setPassword(storedPassword);
//         }
//     }, []);

//     const handleClose = () => {
//         navigate('/user'); // Navigate directly to the user page
//     };

//     const handleLogout = () => {
//         localStorage.removeItem('authToken');
//         navigate('/login');
//     };


//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>User Profile</h2>
//                 <div className="profile-details">
//                     <p><strong>Username:</strong> {username}</p>
//                     <p><strong>Password:</strong> 
//                         <span>{'*'.repeat(password.length)}</span> {/* Display password as dots */}
//                     </p>
//                 </div>
//                 <div className='logout'>
//                         <button onClick={handleLogout}>Logout</button>
//                     </div>
//                 <button onClick={handleClose}>Close</button>
//             </div>
//         </div>
//     );
// };

// export default Profile;



import React, { useEffect, useState } from 'react';
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername) {
            setUsername(storedUsername);
        }

        if (storedPassword) {
            setPassword(storedPassword);
        }
    }, []);

    const handleClose = () => {
        navigate('/user');
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">User Profile</h2>
                <div className="profile-details">
                    <p><strong>Username:</strong> {username}</p>
                    <p><strong>Password:</strong> 
                        <span className="password-display">{'*'.repeat(password.length)}</span>
                    </p>
                </div>
                <div className="modal-actions">
                    <button className="btn action-btn" onClick={handleLogout}>Logout</button>
                    <button className="btn action-btn" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
