import React, { useState } from 'react';
import './About.css'
import home from '../assert/home.png'
import location from '../assert/location.jpeg'
import call from '../assert/call.jpeg'
import email from '../assert/email.jpeg'

const About = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                        <div className="text-content"><h3>Contact info</h3>
                            <div className="contact-info">

                                <div className="address">
                                    <img src={home} alt='home' width='30' height='40' />
                                    <p>35, SKC Road, Near NGP Dance CO, Erode, India, 638001</p>
                                </div>
                            </div>
                            <br />
                            <div className="contact-info">
                                <div className="address">
                                    <img src={location} alt='home' width='30' height='40' />
                                    <p> Erode, Tamil Nadu</p>
                                </div>
                            </div>
                            <br />
                            <div className="contact-info">
                                <div className="address">
                                    <img src={call} alt='home' width='30' height='40' />
                                    <p>096550 12551</p>
                                </div>
                            </div>
                            <br />
                            <div className="contact-info">
                                <div className="address">
                                    <img src={email} alt='home' width='30' height='40' />
                                    <p>syama.meera@gmail.com</p>
                                </div>
                            </div>
                            <br />
                        </div>

                    </div>

                );
            case 'section2':
                return (
                    <div className="section-content">
                        <div className="text-content">
                            <div className="contact-info">
                                <h3>About Extreme Wellness Studio</h3>
                                <div className="address">
                                    <p>Place to be healthy, fit and nutritious.
                                        Every day we provide a vital information about healthy food habit with physical
                                        workout like yoga, cross fit etc</p>
                                </div>
                            </div>
                            <br />
                            <h3>Coach details</h3>

                            <div className="grid">
                                <div className="d">
                                    <div className="items">
                                        <h4>vheloo</h4>

                                    </div>
                                </div>
                                <div className="d">
                                    <div className="items">
                                        <h4>Maha</h4>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh', margin: 0 }}>
            <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>Contact Info</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Details About Extreme Wellness Studio</a>
            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default About;
