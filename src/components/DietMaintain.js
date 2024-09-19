import React, { useState } from 'react';
 // Make sure to i;
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
import Deit from './Diet';


const Destination = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                         <div class="schedule-container">
        <h1>Strength Training (3 Days a Week)</h1>
        <p><strong>Objective:</strong> Maintain muscle mass and strength. Incorporate resistance training to keep your body strong and fit.</p>
        <p><strong>Schedule:</strong> Monday, Wednesday, Friday</p>

        <div class="schedule-section">
            <h2>Day 1: Upper Body</h2>
            <p><strong>Warm-Up:</strong> 5-10 minutes of light cardio (e.g., brisk walking)</p>
            <ul>
                <li><strong>Bench Press:</strong> 3 sets of 8-12 reps</li>
                <li><strong>Dumbbell Rows:</strong> 3 sets of 8-12 reps</li>
                <li><strong>Shoulder Press:</strong> 3 sets of 8-12 reps</li>
                <li><strong>Bicep Curls:</strong> 3 sets of 12-15 reps</li>
                <li><strong>Tricep Dips:</strong> 3 sets of 12-15 reps</li>
            </ul>
            <p><strong>Cool Down:</strong> Stretching for the upper body</p>
        </div>

        <div class="schedule-section">
            <h2>Day 2: Lower Body</h2>
            <p><strong>Warm-Up:</strong> 5-10 minutes of light cardio</p>
            <ul>
                <li><strong>Squats:</strong> 3 sets of 8-12 reps</li>
                <li><strong>Deadlifts:</strong> 3 sets of 8-12 reps</li>
                <li><strong>Lunges:</strong> 3 sets of 10-15 reps per leg</li>
                <li><strong>Leg Press:</strong> 3 sets of 10-15 reps</li>
                <li><strong>Calf Raises:</strong> 3 sets of 15-20 reps</li>
            </ul>
            <p><strong>Cool Down:</strong> Stretching for the lower body</p>
        </div>

        <div class="schedule-section">
            <h2>Day 3: Full Body</h2>
            <p><strong>Warm-Up:</strong> 5-10 minutes of light cardio</p>
            <ul>
                <li><strong>Kettlebell Swings:</strong> 3 sets of 12-15 reps</li>
                <li><strong>Push-Ups:</strong> 3 sets of 10-15 reps</li>
                <li><strong>Pull-Ups or Lat Pulldowns:</strong> 3 sets of 8-12 reps</li>
                <li><strong>Planks:</strong> 3 sets of 30-60 seconds</li>
                <li><strong>Russian Twists:</strong> 3 sets of 20 reps per side</li>
            </ul>
            <p><strong>Cool Down:</strong> Full-body stretching</p>
        </div>

        
        <div class="additional-content">
            <h2>Tips for Success</h2>
            <ul>
                <li><strong>Form:</strong> Ensure proper form to avoid injuries. Consider working with a trainer if you’re unsure about your technique.</li>
                <li><strong>Progression:</strong> Gradually increase the weights or resistance as you get stronger to keep challenging your muscles.</li>
                <li><strong>Rest:</strong> Allow at least one day of rest between workouts to let your muscles recover.</li>
                <li><strong>Nutrition:</strong> Support your training with a balanced diet rich in protein, healthy fats, and carbohydrates.</li>
            </ul>
        </div>
    </div>

                        
                            
                            
                        
                    </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                        <div class="schedule-container">
        <h1>Cardiovascular Exercise (2 Days a Week)</h1>
        <p><strong>Objective:</strong> Maintain cardiovascular fitness and manage weight.</p>
        <p><strong>Schedule:</strong> Tuesday, Thursday</p>

        <div class="schedule-section">
            <h2>Day 4: Steady-State Cardio</h2>
            <p><strong>Activity:</strong> 30-45 minutes of moderate-intensity cardio (e.g., jogging, cycling, or swimming)</p>
        </div>

        <div class="schedule-section">
            <h2>Day 5: Interval Training</h2>
            <p><strong>Warm-Up:</strong> 5-10 minutes of light cardio</p>
            <ul>
                <li><strong>High-Intensity Exercise:</strong> 1 minute of high-intensity exercise (e.g., sprinting or fast cycling)</li>
                <li><strong>Low-Intensity Recovery:</strong> 2 minutes of low-intensity recovery (e.g., walking or slow cycling)</li>
                <li>Repeat for 20-30 minutes</li>
            </ul>
            <p><strong>Cool Down:</strong> 5-10 minutes of light cardio and stretching</p>
        </div>

        
        <div class="additional-content">
            <h2>Tips for Success</h2>
            <ul>
                <li><strong>Consistency:</strong> Stick to your schedule to build and maintain cardiovascular fitness.</li>
                <li><strong>Intensity:</strong> Adjust the intensity of your workouts based on your fitness level and goals.</li>
                <li><strong>Variety:</strong> Mix different cardio activities to keep workouts interesting and engage different muscle groups.</li>
                <li><strong>Hydration:</strong> Stay hydrated before, during, and after your workouts to support performance and recovery.</li>
            </ul>
        </div>
    </div>

                    </div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                           <div class="schedule-container">
        <h1>Flexibility and Recovery (1 Day a Week)</h1>
        <p><strong>Objective:</strong> Improve flexibility and aid in recovery.</p>
        <p><strong>Schedule:</strong> Saturday</p>

        <div class="schedule-section">
            <h2>Day 6: Yoga or Stretching Routine</h2>
            <p><strong>Activity:</strong> 30-45 minutes of yoga or a full-body stretching routine</p>
            <p><strong>Focus:</strong> Deep breathing and holding stretches for 20-30 seconds each</p>
        </div>

    
        <div class="additional-content">
            <h2>Tips for Success</h2>
            <ul>
                <li><strong>Breathing:</strong> Incorporate deep breathing techniques to enhance relaxation and effectiveness of stretches.</li>
                <li><strong>Consistency:</strong> Regular practice improves flexibility over time. Try to integrate stretching into your daily routine.</li>
                <li><strong>Focus:</strong> Pay attention to areas of tightness or discomfort, and stretch gently to avoid injury.</li>
                <li><strong>Hydration:</strong> Stay well-hydrated to keep your muscles pliable and support recovery.</li>
                <li><strong>Variety:</strong> Mix different stretches or yoga poses to target various muscle groups and prevent boredom.</li>
            </ul>
        </div>
    </div>
                    </div>
                );
            case 'section4':
                return (
                    <div className="section-content">
                       <div class="tips-container">
        <h1>Daily Routine Tips</h1>

        <div class="tips-section">
            <h2>Hydration</h2>
            <p>Drink water consistently throughout the day, especially if you're engaging in physical tasks. Proper hydration supports overall health, improves physical performance, and aids in digestion.</p>
            <ul>
                <li>Carry a water bottle with you to remind yourself to drink regularly.</li>
                <li>Incorporate water-rich foods into your diet, such as fruits and vegetables.</li>
            </ul>
        </div>

        <div class="tips-section">
            <h2>Nutrition</h2>
            <p>Maintain a balanced diet that supports your activity level. Focus on nutrient-dense foods such as lean proteins, whole grains, fruits, and vegetables. Ensure you’re getting enough calories to match your activity level.</p>
            <ul>
                <li>Plan meals ahead to include a variety of nutrient-rich foods.</li>
                <li>Adjust portion sizes based on your activity level and goals.</li>
                <li>Consider consulting a nutritionist for personalized dietary advice.</li>
            </ul>
        </div>

        <div class="tips-section">
            <h2>Sleep</h2>
            <p>Prioritize 7-9 hours of quality sleep each night to support recovery and overall health. Good sleep is essential for muscle recovery, mental health, and daily functioning.</p>
            <ul>
                <li>Establish a regular sleep schedule by going to bed and waking up at the same time each day.</li>
                <li>Create a relaxing bedtime routine to improve sleep quality.</li>
                <li>Avoid screens and heavy meals before bedtime.</li>
            </ul>
        </div>

        <div class="tips-section">
            <h2>Recovery</h2>
            <p>Include light stretching or foam rolling on days after intense physical activities or workouts to aid recovery and prevent muscle soreness. Recovery is crucial for maintaining performance and reducing the risk of injuries.</p>
            <ul>
                <li>Incorporate stretching or foam rolling into your post-workout routine.</li>
                <li>Consider taking rest days or engaging in low-intensity activities to allow for full recovery.</li>
                <li>Listen to your body and address any signs of overtraining or discomfort.</li>
            </ul>
        </div>

        
        <div class="additional-content">
            <h2>Integrating Physical Activity</h2>
            <p>This plan integrates structured workouts with daily work-related physical activities to help you maintain your weight and overall fitness. Incorporate movement into your workday, such as taking breaks to walk or use a standing desk.</p>
            <ul>
                <li>Take short, active breaks every hour to stretch or walk.</li>
                <li>Consider using a pedometer or fitness tracker to monitor your daily steps and activity levels.</li>
                <li>Find opportunities to incorporate physical activity into your routine, such as biking to work or using stairs instead of elevators.</li>
            </ul>
        </div>
    </div>
                    </div>
                );
            case 'section5':
                return (
                    <div className="section-content">
                            <div className="section-content">
                            {'Deit'}
                            
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Strength Training </a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Cardiovascular Exercise</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Cardiovascular Exercise</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>Daily Routine Tips</a>
                <a href="#section5" onClick={() => setActiveSection('section5')}>Referencee</a>
            </div>
            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
