import React, { useState } from 'react';
//import '../style1.css'; // Make sure to import the CSS file
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


const Destination = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const renderContent = () => {
        switch (activeSection) {
            case 'section1':
                return (
                    <div className="section-content">
                       <div class="cardio-exercises-container">
        <h1>Cardiovascular Exercises</h1>

        <div class="cardio-exercises-section">
            <h2>Exercise Details</h2>
            <p>This section provides detailed information on cardiovascular exercises that help improve heart health, endurance, and overall fitness. Regular cardiovascular exercise is essential for maintaining a healthy lifestyle and achieving fitness goals.</p>
            <ul>
                <li>
                    <strong>Walking:</strong>
                    <p>Begin with 30 minutes of brisk walking, 5 days a week. Gradually increase the duration and intensity as endurance improves. Walking at a brisk pace helps boost cardiovascular health and can be easily adjusted to fit different fitness levels.</p>
                </li>
                <li>
                    <strong>Cycling:</strong>
                    <p>Engage in cycling on a stationary bike or outdoors for 20-40 minutes, 3-5 days a week. Adjust the resistance to match your fitness level. Cycling is an excellent low-impact exercise that improves cardiovascular endurance and leg strength.</p>
                </li>
                <li>
                    <strong>Swimming:</strong>
                    <p>Perform swimming or water aerobics for 30-45 minutes, 3 times a week. Water exercises are gentle on the joints and effective for burning calories. Swimming engages multiple muscle groups and provides a full-body workout while minimizing impact on the joints.</p>
                </li>
            </ul>
        </div>
    </div>

                       </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                       <div class="strength-training-container">
        <h1>Strength Training</h1>

        <div class="strength-training-section">
            <h2>Exercise Details</h2>
            <p>This section provides detailed information on strength training exercises to build muscle and improve overall strength. Strength training helps enhance muscle tone, boost metabolism, and support functional fitness.</p>
            <ul>
                <li>
                    <strong>Bodyweight Exercises:</strong>
                    <p>These exercises use your own body weight for resistance and are great for building strength without equipment:</p>
                    <ul class="exercise-list">
                        <li><strong>Chair Squats:</strong> 3 sets of 10-15 reps. Use a chair for support if needed. Sit back and lower your body until your thighs are parallel to the floor, then return to standing.</li>
                        <li><strong>Wall Push-ups:</strong> 3 sets of 8-12 reps. Start with wall push-ups and progress to regular push-ups as strength increases. Keep your body straight and press against the wall, then return to starting position.</li>
                        <li><strong>Step-ups:</strong> 3 sets of 10-12 reps per leg using a step or low platform. Step up with one foot, bringing the other foot up to meet it, then step back down and repeat.</li>
                    </ul>
                </li>
                <li>
                    <strong>Resistance Bands:</strong>
                    <p>Resistance bands provide versatile resistance for strength training exercises:</p>
                    <ul class="exercise-list">
                        <li><strong>Resistance Band Rows:</strong> 3 sets of 12-15 reps. Focus on controlled movements. Secure the band under your feet or a stable object, pull the handles towards you, and then slowly return to starting position.</li>
                        <li><strong>Resistance Band Leg Presses:</strong> 3 sets of 12-15 reps. Perform while seated or lying down. Loop the band around your feet and press your legs away from your body, then return to starting position.</li>
                    </ul>
                </li>
                <li>
                    <strong>Weight Training:</strong>
                    <p>If you have access to weights, these exercises can further enhance muscle strength:</p>
                    <ul class="exercise-list">
                        <li><strong>Dumbbell Deadlifts:</strong> 3 sets of 10-12 reps. With a dumbbell in each hand, hinge at the hips and lower the weights towards the ground while keeping your back straight, then return to standing.</li>
                        <li><strong>Dumbbell Bench Press:</strong> 3 sets of 12-15 reps with light weights. Lie on a bench or the floor, press the dumbbells up from chest level, then lower them back down.</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

                    </div>
                );
            case 'section3':
                return (
                    <div className="section-content">
                        <div class="daily-activities-container">
        <h1>Daily Activities</h1>

        <div class="daily-activities-section">
            <h2>Activity Details</h2>
            <p>Incorporating daily activities into your routine can significantly contribute to your overall physical fitness. These activities help maintain an active lifestyle and can be integrated seamlessly into your daily schedule.</p>
            <ul>
                <li>
                    <strong>Increase Daily Steps:</strong>
                    <p>Aim for 7,000-10,000 steps per day to maintain an active lifestyle. Use a pedometer or fitness tracker to monitor your progress and set achievable goals. Gradually increase your step count as you build endurance.</p>
                </li>
                <li>
                    <strong>Active Commuting:</strong>
                    <p>If possible, incorporate walking or cycling into part of your commute. Aim for 10-15 minutes of active commuting each day to enhance cardiovascular health and increase overall physical activity.</p>
                </li>
                <li>
                    <strong>Household Activities:</strong>
                    <p>Engage in various household chores such as cleaning, gardening, or organizing. These activities can contribute to your overall physical activity and help you stay active throughout the day.</p>
                </li>
                <li>
                    <strong>Desk Exercises:</strong>
                    <p>If you have a sedentary job, incorporate simple exercises at your desk. Perform seated leg lifts, seated marches, or gentle stretches every hour to keep your muscles engaged and reduce stiffness.</p>
                </li>
            </ul>
        </div>
    </div>
                    </div>
                );
            case 'section4':
                return (
                    <div className="section-content">
                       <div className="workout-plan-container">
            <h1>Sample Workout Plan</h1>

            <div className="workout-plan-section">
                <h2>Weekly Schedule</h2>
                <p>This sample workout plan is designed to provide a comprehensive fitness routine by combining cardiovascular exercises, strength training, flexibility work, and rest. Follow the plan to achieve a balanced and effective workout regimen.</p>
                <ul>
                    <li>
                        <strong>Monday:</strong>
                        <p><strong>Brisk Walking:</strong> <br />
                        Engage in brisk walking for 30 minutes. Choose a pace that gets your heart rate up while still allowing you to converse comfortably. Aim to maintain a steady pace throughout.</p>
                        <p><strong>Chair Squats and Wall Push-ups:</strong> <br />
                        - Chair Squats: 3 sets of 10-15 reps. Use a chair for support if needed and ensure proper form.<br />
                        - Wall Push-ups: 3 sets of 8-12 reps. Start with wall push-ups and progress to regular push-ups as strength improves.</p>
                    </li>
                    <li>
                        <strong>Tuesday:</strong>
                        <p><strong>Swimming:</strong> <br />
                        Swim for 30 minutes, alternating between different strokes to engage various muscle groups and enhance cardiovascular fitness. Water exercises are gentle on the joints.</p>
                        <p><strong>Stretching:</strong> <br />
                        Spend 15 minutes on stretching major muscle groups. Hold each stretch for 20-30 seconds to improve flexibility and aid in recovery.</p>
                    </li>
                    <li>
                        <strong>Wednesday:</strong>
                        <p><strong>Cycling:</strong> <br />
                        Cycle for 30 minutes. Adjust the resistance level on a stationary bike or outdoor bike to match your fitness level and intensity preferences.</p>
                        <p><strong>Resistance Band Rows and Leg Presses:</strong> <br />
                        - Resistance Band Rows: 3 sets of 12-15 reps. Focus on controlled movements to work your back muscles.<br />
                        - Resistance Band Leg Presses: 3 sets of 12-15 reps. Perform seated or lying down to target your leg muscles.</p>
                    </li>
                    <li>
                        <strong>Thursday:</strong>
                        <p><strong>Gentle Yoga:</strong> <br />
                        Practice gentle yoga for 30 minutes, focusing on poses that enhance flexibility and relaxation. Include poses such as Child’s Pose, Cat-Cow, and Forward Bend.</p>
                        <p><strong>Dumbbell Deadlifts:</strong> <br />
                        - Dumbbell Deadlifts: 3 sets of 10-12 reps. Use light weights and focus on proper form to target your hamstrings and lower back.</p>
                    </li>
                    <li>
                        <strong>Friday:</strong>
                        <p><strong>Brisk Walking:</strong> <br />
                        Repeat the brisk walking routine for 30 minutes, maintaining a steady pace to support cardiovascular health.</p>
                        <p><strong>Step-ups and Resistance Band Exercises:</strong> <br />
                        - Step-ups: 3 sets of 10-12 reps per leg using a step or low platform. Focus on balance and controlled movements.<br />
                        - Resistance Band Exercises: Include a variety of exercises such as bicep curls or shoulder presses for additional strength training.</p>
                    </li>
                    <li>
                        <strong>Saturday:</strong>
                        <p><strong>Swimming:</strong> <br />
                        Swim for 45 minutes. Choose different strokes and intensities to provide a full-body workout and improve cardiovascular endurance.</p>
                        <p><strong>Stretching:</strong> <br />
                        Perform a comprehensive stretching routine for 15 minutes, focusing on relaxation and flexibility. Include stretches for all major muscle groups.</p>
                    </li>
                    <li>
                        <strong>Sunday:</strong>
                        <p><strong>Rest or Light Activity:</strong> <br />
                        Engage in a leisurely walk or gentle stretching. Focus on relaxation and recovery to prepare for the upcoming week.</p>
                    </li>
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
                <a href="#section1" onClick={() => setActiveSection('section1')}>Cardiovascular Exercises</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Strength Training</a>
                <a href="#section3" onClick={() => setActiveSection('section3')}>Daily Activities</a>
                <a href="#section4" onClick={() => setActiveSection('section4')}>Sample Workout Plan</a>
                 <a href="#section5" onClick={() => setActiveSection('section5')}>Referencee</a>
            </div>
            <div className="content-section">
                {renderContent()}
            </div>
        </div>
    );
};

export default Destination;
