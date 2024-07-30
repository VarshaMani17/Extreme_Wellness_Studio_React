import React from 'react';
import './UserPage.css'; 
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };
    return (

        <div className="programs-container">
            <div className='logout'>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <br/>
            <br/>
            <div className="success-rate">
                <p>We have 98% success rate!</p>
                <p>People who follow even 80% of our program have a 98% success rate.</p>
            </div>
            <div className="programs-content">
                <h2>What's Included In The <span className="highlight">Programs?</span></h2>
                <div className="programs-grid">
                    <div className="program-item">
                        <div className="icon meal-plans-icon"></div>
                        <h3>Customized Meal Plans</h3>
                        <p>Easy to follow meal plans specially customized for you. Your plans will take into account any health conditions and food preferences you have.</p>
                    </div>
                    <div className="program-item">
                        <div className="icon dieticians-icon"></div>
                        <h3>Panel of Dieticians and Doctors</h3>
                        <p>Regular consultation with a panel of coaches who will be there to mentor you at every step.</p>
                    </div>
                    <div className="program-item">
                        <div className="icon superfoods-icon"></div>
                        <h3>Super Healthy Superfoods</h3>
                        <p>A variety of superfoods that will help supercharge your immunity.</p>
                    </div>
                    <div className="program-item">
                        <div className="icon tutorials-icon"></div>
                        <h3>Online Tutorials</h3>
                        <p>Free online tutorials on food & nutrition that will help you understand food & make lifelong changes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;













