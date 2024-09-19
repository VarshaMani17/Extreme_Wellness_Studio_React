import React, { useState } from 'react';
import './img.css';
import oimg7 from '../assert/oimg7.jpg';

import oimg6 from '../assert/oimg6.jpg';
import oimg5 from '../assert/oimg5.jpg';
import oimg8 from '../assert/oimg8.jpg';
import oimg3 from '../assert/oimg3.jpg';
import oimg4 from '../assert/oimg4.jpg';

import fimg1 from '../assert/fimg1.jpg';
import fimg2 from '../assert/fimg2.jpg';
import fimg3 from '../assert/fimg3.jpg';
import fimg4 from '../assert/fimg4.jpg';
import fimg5 from '../assert/fimg5.jpg';
import fimg6 from '../assert/fimg6.jpg';
//import Deit from './Diet';
// Make sure this file contains styles for the class names used below

const Underweight = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                        <div className="container">
                            <h1>Work Activities</h1>

                            <div className="section">
                                <h2>Objective</h2>
                                <p>Incorporate calorie-burning activities that also stimulate muscle growth.</p>
                            </div>

                            <div className="section">
                                <h2>Frequency</h2>
                                <p>Daily or as part of your job routine.</p>
                            </div>

                            <div className="section">
                                <h2>Activities</h2>

                                <div className="exercise-group">
                                    <h3>Manual Labor</h3>
                                    <p>If your job involves physical work (e.g., lifting, carrying, or manual assembly), these can be excellent for building functional strength.</p>
                                </div>

                                <div className="exercise-group">
                                    <h3>Active Commuting</h3>
                                    <p>Walk or cycle to work. Walking helps improve cardiovascular health and burn calories, while cycling with a higher resistance setting can increase muscle engagement in the legs.</p>
                                </div>

                                <div className="exercise-group">
                                    <h3>Physical Tasks at Home</h3>
                                    <ul className="exercise-list">
                                        <li><strong>Gardening:</strong> Great for full-body engagement, especially for the upper body.</li>
                                        <li><strong>DIY Projects:</strong> Activities such as painting, woodworking, or assembling furniture require strength and stamina.</li>
                                        <li><strong>Sports:</strong> Engage in recreational sports like tennis, basketball, or soccer.</li>
                                    </ul>
                                </div>

                                <div className="exercise-group">
                                    <h3>Standing Desks</h3>
                                    <p>If your job involves long hours of sitting, consider using a standing desk.</p>
                                </div>

                                <div className="exercise-group">
                                    <h3>Stretch Breaks</h3>
                                    <p>Include short, regular stretching or movement breaks throughout your workday.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                        <div className="container">
                            <h1>Strength Training Plan</h1>

                            <div className="section">
                                <h2>Objective</h2>
                                <p>Build muscle mass, which can help in weight gain.</p>
                            </div>

                            <div className="section">
                                <h2>Frequency</h2>
                                <p>3-4 times per week</p>
                            </div>

                            <div className="section">
                                <h2>Exercises</h2>
                                <div className="exercise-group">
                                    <h3>Compound Movements</h3>
                                    <ul className="exercise-list">
                                        <li>Squats: 3 sets of 8-12 reps</li>
                                        <li>Deadlifts: 3 sets of 8-12 reps</li>
                                        <li>Bench Press: 3 sets of 8-12 reps</li>
                                        <li>Pull-Ups/Chin-Ups: 3 sets to failure</li>
                                        <li>Overhead Press: 3 sets of 8-12 reps</li>
                                        <li>Rows: 3 sets of 8-12 reps</li>
                                    </ul>
                                </div>

                                <div className="exercise-group">
                                    <h3>Isolation Movements</h3>
                                    <ul className="exercise-list">
                                        <li>Bicep Curls: 3 sets of 12-15 reps</li>
                                        <li>Tricep Extensions: 3 sets of 12-15 reps</li>
                                        <li>Leg Curls/Extensions: 3 sets of 12-15 reps</li>
                                        <li>Calf Raises: 3 sets of 15-20 reps</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="section">
                                <h2>Progression</h2>
                                <p>Gradually increase weights or resistance as you become stronger.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                        <div className="container">
                            <h1>Nutrition</h1>

                            <div className="section">
                                <h2>Objective</h2>
                                <p>Ensure you're consuming enough calories and protein to support muscle growth and weight gain.</p>
                            </div>

                            <div className="section">
                                <h2>Guidelines</h2>
                                <div className="exercise-group">
                                    <h3>Caloric Surplus</h3>
                                    <p>Eat more calories than you burn. Aim for nutrient-dense foods.</p>
                                </div>
                                <div className="exercise-group">
                                    <h3>Protein</h3>
                                    <p>1.2 to 2.2 grams of protein per kilogram of body weight daily. Excellent sources include chicken, fish, and plant-based proteins.</p>
                                </div>
                                <div className="exercise-group">
                                    <h3>Carbohydrates and Fats</h3>
                                    <ul className="exercise-list">
                                        <li><strong>Complex Carbs:</strong> Whole grains, sweet potatoes, oats, and legumes provide energy.</li>
                                        <li><strong>Healthy Fats:</strong> Avocados, nuts, seeds, and olive oil.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'section4':
                return (
                    <div className="section-content">
                        <div className="container">
                            <h1>Tracking Progress</h1>

                            <div className="section">
                                <h2>Objective</h2>
                                <p>Monitor progress to ensure you're achieving muscle gain and weight goals.</p>
                            </div>

                            <div className="section">
                                <h2>Methods</h2>
                                <div className="exercise-group">
                                    <h3>Log Workouts</h3>
                                    <p>Track workouts to monitor strength gains. Record weights, sets, and reps.</p>
                                </div>

                                <div className="exercise-group">
                                    <h3>Nutrition Diary</h3>
                                    <p>Track meals to ensure daily calorie and protein goals are met.</p>
                                </div>
                                <div className="exercise-group">
                                    <h3>Body Measurements</h3>
                                    <ul className="exercise-list">
                                        <li>Weight</li>
                                        <li>Body Fat Percentage</li>
                                        <li>Muscle Measurements</li>
                                        <li>Progress Photos</li>
                                    </ul>
                                </div>

                                <div className="exercise-group">
                                    <h3>Sleep and Recovery</h3>
                                    <p>7-9 hours of sleep nightly, with rest days for muscle recovery.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
                case 'section5':
                return (
                    <div className="section-content">
                            <div className="section-content">
                            
                            
                            <div className="image-grid">
                                <div className="image"><img src={oimg7} alt="Food Item 1" /></div>
                                <div className="image"><img src={oimg8} alt="Food Item 2" /></div>
                                <div className="image"><img src={oimg3} alt="Food Item 3" /></div>
                                <div className="image"><img src={oimg4} alt="Food Item 4" /></div>
                                <div className="image"><img src={oimg5} alt="Food Item 5" /></div>
                                <div className="image"><img src={oimg6} alt="Food Item 6" /></div>
                            </div>
                    
                            {'food'}
                            
                            <div className="image-grid">
                                <div className="image"><img src={fimg1} alt="Dietary Change 1" /></div>
                                <div className="image"><img src={fimg2} alt="Dietary Change 2" /></div>
                                <div className="image"><img src={fimg3} alt="Dietary Change 3" /></div>
                                <div className="image"><img src={fimg4} alt="Dietary Change 4" /></div>
                                <div className="image"><img src={fimg5} alt="Dietary Change 5" /></div>
                                <div className="image"><img src={fimg6} alt="Dietary Change 6" /></div>
                            </div>
                        </div>
                    </div>
                );
           
            default:
                return null;
        }
    };

    return (
        <div className="main-container">
            <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>Work Activities</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Strength Training Plan</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Nutrition</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>Tracking Progress</a>
                <a href="#section5" onClick={() => setActiveSection('section5')}>Referencee</a>
            </div>
            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Underweight;
