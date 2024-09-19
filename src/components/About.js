import React, { useState } from 'react';
import './About.css'
import home from '../assert/home.png'
import location from '../assert/location.jpeg'
import call from '../assert/call.jpeg'
import email from '../assert/email.jpeg'
import c1 from '../assert/janarthanan.jpg'
import c2 from '../assert/syamla.jpg'
import c3 from '../assert/saranya.jpg'

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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.5152793044967!2d77.71893730857435!3d11.336372648573509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f6902d69479%3A0x4c514769b41dc3d9!2sExtreme%20Wellness%20Studio%20-%20Best%20weight%20management%20service!5e1!3m2!1sen!2sin!4v1722848733028!5m2!1sen!2sin" width="600" height="450" 
                            style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Extreme-Wellness'></iframe>
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
                                    <p> It is a place to be healthy, fit and nutritious.<br/>
                                        Every day we provide a vital information about healthy food habit<br/> with physical
                                        workout like yoga, cross fit etc</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <h3>Working Hours</h3>
                                <div className="address">
                                   <ul>
                                    <li><b>Morning:</b> 7.30AM to 10.30AM</li>
                                    <li><b>Evening:</b> 4.30PM to 7.30PM</li>
                                   </ul>
                                </div>
                            </div>
                            <br />
                            
                        </div>
                    </div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                        <div className="text-content"><h1>Coach Details</h1>
                            <div className="contact-info">
                                <img src={c1} alt='Coach Janarthanan' className="coach-image" />
                                <div className="coach-details">
                                    <p><b>Coach Name:</b> Janarthanan<br />
                                    <b>Phone No:</b> +91 6383463845<br />
                                    <b>Experience:</b> Since 2011<br />
                                    <b>Type of Training:</b></p>
                                    <ul>
                                        <li>Eating Habits</li>
                                        <li>Wellness</li>
                                        <li>Weight Loss</li>
                                        <li>Weight Gain</li>
                                        <li>Counseling for Weight Loss</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div className="contact-info">
                                <img src={c2} alt='Coach SyamalaDevi' className="coach-image" />
                                <div className="coach-details">
                                    <p><b>Coach Name:</b> SyamalaDevi<br />
                                    <b>Phone No:</b> +91 9655012551<br />
                                    <b>Experience:</b> Since 2015<br />
                                    <b>Type of Training:</b></p>
                                    <ul>
                                        <li>Eating Habits</li>
                                        <li>Wellness</li>
                                        <li>Weight Loss</li>
                                        <li>Weight Gain</li>
                                        <li>Yoga</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div className="contact-info">
                                <img src={c3} alt='Coach Saranya' className="coach-image" />
                                <div className="coach-details">
                                    <p><b>Coach Name:</b> Saranya<br />
                                    <b>Phone No:</b> +91 6383463845<br />
                                    <b>Experience:</b> Since 2020<br />
                                    <b>Type of Training:</b></p>
                                    <ul>
                                        <li>Eating Habits</li>
                                        <li>Wellness</li>
                                        <li>Weight Loss</li>
                                        <li>Weight Gain</li>
                                        <li>Yoga</li>
                                    </ul>
                                </div>
                            </div>
                            <br />
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
                <a href="#section3" onClick={() => setActiveSection('section3')}>Coach Details</a>
            </div>

            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default About;
