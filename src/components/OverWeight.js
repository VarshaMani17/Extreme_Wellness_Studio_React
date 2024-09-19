import React, { useState } from 'react';
//import '../style1.css'; // Make sure to import the CSS file
import './style1.css';
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
                       <div class="cardio-container">
        <h1>Cardiovascular Exercises</h1>

        <div class="cardio-section">
            <h2>Walking</h2>
            <p>Start with brisk walking for 30-45 minutes, 5 days a week. Walking is a low-impact exercise that is easy to incorporate into daily routines and helps improve cardiovascular health.</p>
            <ul>
                <li><strong>Intensity:</strong> Begin with a pace that increases your heart rate but allows you to hold a conversation. Gradually increase the intensity as your fitness level improves.</li>
                <li><strong>Benefits:</strong> Improves cardiovascular fitness, aids in weight management, and enhances mood.</li>
                <li><strong>Tips:</strong> Use a comfortable pair of walking shoes, maintain good posture, and vary your route to keep the exercise interesting.</li>
            </ul>
        </div>

        <div class="cardio-section">
            <h2>Cycling</h2>
            <p>Use a stationary bike or ride outdoors for 20-30 minutes, 3-4 days a week. Cycling is a great way to improve cardiovascular fitness and build lower body strength.</p>
            <ul>
                <li><strong>Intensity:</strong> Adjust the resistance level on a stationary bike to increase the challenge or vary your speed and terrain when cycling outdoors.</li>
                <li><strong>Benefits:</strong> Enhances cardiovascular endurance, strengthens leg muscles, and is joint-friendly.</li>
                <li><strong>Tips:</strong> Ensure your bike is properly adjusted for your height, maintain a steady cadence, and incorporate interval training to boost fitness.</li>
            </ul>
        </div>

        <div class="cardio-section">
            <h2>Swimming</h2>
            <p>Engage in swimming or water aerobics for 30 minutes, 2-3 times a week. Swimming provides a full-body workout with minimal impact on the joints, making it ideal for people with joint issues or those looking for a low-impact exercise.</p>
            <ul>
                <li><strong>Intensity:</strong> Vary your strokes and swim at different speeds to challenge your cardiovascular system and build endurance.</li>
                <li><strong>Benefits:</strong> Improves cardiovascular health, tones muscles, and is an effective full-body workout.</li>
                <li><strong>Tips:</strong> Focus on technique and breathing, use a swim cap to reduce drag, and ensure you stay hydrated before and after your swim.</li>
            </ul>
        </div>

        
        <div class="additional-content">
            <h2>Incorporating Cardiovascular Exercises into Your Routine</h2>
            <p>To maximize the benefits of cardiovascular exercises, integrate them into your weekly routine alongside other forms of exercise, such as strength training and flexibility workouts.</p>
            <ul>
                <li><strong>Consistency:</strong> Aim to perform cardiovascular exercises regularly to maintain and improve fitness levels.</li>
                <li><strong>Variety:</strong> Mix different types of cardio to prevent boredom and work different muscle groups.</li>
                <li><strong>Tracking Progress:</strong> Use fitness trackers or apps to monitor your workouts and set goals to stay motivated.</li>
                <li><strong>Recovery:</strong> Allow time for recovery between intense cardio sessions to prevent overtraining and injury.</li>
            </ul>
        </div>
    </div>
                    </div>
                );
            case 'section2':
                return (
                    <div className="section-content">
                       <div class="strength-container">
        <h1>Strength Training</h1>

        <div class="strength-section">
            <h2>Bodyweight Exercises</h2>
            <p>Bodyweight exercises are a great starting point for building strength and improving fitness. These exercises use your own body weight as resistance, making them accessible and effective.</p>
            <ul>
                <li><strong>Squats:</strong> 3 sets of 12-15 reps. Focus on maintaining proper form, with your knees tracking over your toes and your chest up. Gradually increase repetitions as you get stronger.</li>
                <li><strong>Push-ups:</strong> 3 sets of 8-12 reps. Start with modified push-ups (knees on the ground) if needed and progress to full push-ups. Ensure your body stays in a straight line from head to heels.</li>
                <li><strong>Lunges:</strong> 3 sets of 10-12 reps per leg. Step forward and lower your hips until both knees are bent at a 90-degree angle. Maintain stability and control throughout the movement.</li>
            </ul>
        </div>

        <div class="strength-section">
            <h2>Resistance Bands</h2>
            <p>Resistance bands are versatile tools for strength training. They provide resistance during both the concentric and eccentric phases of movement, which can help build muscle strength and endurance.</p>
            <ul>
                <li><strong>Bicep Curls:</strong> 3 sets of 12-15 reps. Use light resistance bands initially and increase resistance as your strength improves. Keep your elbows close to your torso and curl the bands towards your shoulders.</li>
                <li><strong>Shoulder Press:</strong> 3 sets of 12-15 reps. Stand on the band, hold the handles at shoulder height, and press upwards. Maintain good posture and keep your core engaged.</li>
            </ul>
        </div>

        <div class="strength-section">
            <h2>Weight Training</h2>
            <p>Weight training with dumbbells or other weights can further enhance muscle strength and endurance. Start with lighter weights and focus on proper form before progressing to heavier weights.</p>
            <ul>
                <li><strong>Dumbbell Rows:</strong> 3 sets of 10-12 reps. Bend forward with one hand on a bench for support and row the dumbbell towards your hip. Keep your back straight and engage your core.</li>
                <li><strong>Chest Press:</strong> 3 sets of 12-15 reps. Lie on a bench with a dumbbell in each hand, press the weights up from chest level, and lower them slowly. Keep your feet flat on the floor and back pressed into the bench.</li>
            </ul>
        </div>

        
        <div class="additional-content">
            <h2>Incorporating Strength Training into Your Routine</h2>
            <p>Strength training should be part of a well-rounded fitness routine that includes cardiovascular exercise and flexibility work. Aim to perform strength training exercises 2-3 times per week, allowing for rest days between sessions.</p>
            <ul>
                <li><strong>Progression:</strong> Gradually increase weights, resistance, or repetitions as your strength improves to continue making gains.</li>
                <li><strong>Variety:</strong> Include a variety of exercises to target different muscle groups and prevent plateaus.</li>
                <li><strong>Form:</strong> Prioritize proper form to prevent injury and maximize the effectiveness of each exercise.</li>
                <li><strong>Recovery:</strong> Allow time for muscle recovery between workouts. Consider incorporating stretching or foam rolling to aid in recovery.</li>
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
            <h2>Increase Daily Steps</h2>
            <p>Aim for at least 10,000 steps per day. Use a pedometer or fitness tracker to monitor progress and set incremental goals. Increasing your daily steps can help improve cardiovascular health and overall fitness.</p>
            <ul>
                <li><strong>Tracking:</strong> Set up a daily step goal on your fitness tracker and check your progress throughout the day.</li>
                <li><strong>Tips:</strong> Take the stairs instead of the elevator, park further away from your destination, and take short walking breaks during your day.</li>
            </ul>
        </div>

        <div class="daily-activities-section">
            <h2>Active Commuting</h2>
            <p>Walk or cycle to work or use public transport with walking segments. Aim for at least 30 minutes of active commuting each day. Incorporating physical activity into your commute can boost your overall activity levels and reduce sedentary time.</p>
            <ul>
                <li><strong>Options:</strong> Consider biking to work, walking to the nearest bus stop, or even getting off public transport a few stops early.</li>
                <li><strong>Tips:</strong> Plan your route to include safe and accessible walking or cycling paths. Use a backpack or pannier for convenience.</li>
            </ul>
        </div>

        <div class="daily-activities-section">
            <h2>Household Activities</h2>
            <p>Engage in activities such as cleaning, gardening, or DIY projects. These activities can help burn calories and keep you active throughout the day. Household chores can contribute to your daily physical activity and help you stay fit.</p>
            <ul>
                <li><strong>Examples:</strong> Vacuuming, sweeping, gardening, and even light home repairs can increase your daily activity level.</li>
                <li><strong>Tips:</strong> Turn household chores into a mini-workout by increasing the pace or intensity. Set a timer and challenge yourself to complete tasks more quickly.</li>
            </ul>
        </div>

        <div class="daily-activities-section">
            <h2>Desk Exercises</h2>
            <p>If you have a sedentary job, incorporate simple exercises like seated leg lifts, seated marches, or desk push-ups every hour. These exercises can help counteract the effects of prolonged sitting and improve circulation.</p>
            <ul>
                <li><strong>Examples:</strong> Perform seated leg lifts while sitting at your desk, do seated marches by lifting your knees, and try desk push-ups using the edge of your desk for support.</li>
                <li><strong>Tips:</strong> Set a reminder to perform these exercises every hour. Incorporate stretching exercises to relieve muscle tension and improve flexibility.</li>
            </ul>
        </div>
    </div>
                    </div>
                    
                );
            case 'section4':
                return (
                    <div className="section-content">
                        <div class="workout-plan-container">
        <h1>Sample Workout Plan</h1>

        <div class="workout-plan-section">
            <h2>Weekly Schedule</h2>
            <p>This sample workout plan provides a balanced approach to fitness by combining cardiovascular exercises, strength training, flexibility work, and rest. Follow the plan to achieve a well-rounded fitness routine.</p>
            <ul>
                <li>
                    <strong>Monday:</strong>
                    <p><strong>Brisk Walking:</strong> Engage in brisk walking for 45 minutes. Maintain a pace that is challenging but allows you to converse comfortably. Aim for a steady, consistent pace.</p>
                    <p><strong>Bodyweight Exercises:</strong> Perform the following exercises to build strength and endurance:
                    <ul class="exercise-list">
                        <li>Squats: 3 sets of 12-15 reps. Focus on proper form and depth.</li>
                        <li>Push-ups: 3 sets of 8-12 reps. Adjust hand placement for variety.</li>
                        <li>Lunges: 3 sets of 10-12 reps per leg. Keep your torso upright.</li>
                    </ul>
                    </p>
                </li>
                <li>
                    <strong>Tuesday:</strong>
                    <p><strong>Swimming:</strong> Swim for 30 minutes, alternating between different strokes (freestyle, breaststroke, backstroke) to work various muscle groups and enhance cardiovascular fitness.</p>
                    <p><strong>Stretching:</strong> Spend 15 minutes stretching all major muscle groups. Hold each stretch for 20-30 seconds, focusing on breathing deeply and relaxing.</p>
                </li>
                <li>
                    <strong>Wednesday:</strong>
                    <p><strong>Cycling:</strong> Cycle for 30 minutes, either on a stationary bike or outdoors. Vary the resistance to increase intensity and challenge your cardiovascular system.</p>
                    <p><strong>Resistance Band Exercises:</strong> Use resistance bands for the following exercises:
                    <ul class="exercise-list">
                        <li>Bicep Curls: 3 sets of 12-15 reps. Adjust band tension as needed.</li>
                        <li>Shoulder Press: 3 sets of 12-15 reps. Maintain a neutral spine and controlled movements.</li>
                    </ul>
                    </p>
                </li>
                <li>
                    <strong>Thursday:</strong>
                    <p><strong>Yoga:</strong> Practice yoga for 30 minutes, focusing on poses that enhance flexibility, balance, and relaxation. Include poses such as Downward Dog, Warrior, and Tree Pose.</p>
                    <p><strong>Light Strength Training:</strong> Perform the following light strength training exercises:
                    <ul class="exercise-list">
                        <li>Dumbbell Rows: 3 sets of 10-12 reps. Use light weights and focus on form.</li>
                        <li>Chest Press: 3 sets of 12-15 reps. Ensure proper alignment and controlled movement.</li>
                    </ul>
                    </p>
                </li>
                <li>
                    <strong>Friday:</strong>
                    <p><strong>Brisk Walking:</strong> Repeat the brisk walking session for 45 minutes. Maintain the same steady pace as on Monday.</p>
                    <p><strong>Bodyweight Exercises:</strong> Repeat the bodyweight exercises from Monday to reinforce strength and endurance:
                    <ul class="exercise-list">
                        <li>Squats: 3 sets of 12-15 reps.</li>
                        <li>Push-ups: 3 sets of 8-12 reps.</li>
                        <li>Lunges: 3 sets of 10-12 reps per leg.</li>
                    </ul>
                    </p>
                </li>
                <li>
                    <strong>Saturday:</strong>
                    <p><strong>Swimming or Cycling:</strong> Choose between swimming or cycling for 30 minutes based on your preference or availability. Both activities provide excellent cardiovascular benefits.</p>
                    <p><strong>Stretching:</strong> Spend 15 minutes on a comprehensive stretching routine to maintain flexibility and aid in recovery.</p>
                </li>
                <li>
                    <strong>Sunday:</strong>
                    <p><strong>Rest or Light Activity:</strong> Engage in a leisurely walk or other light activity. Focus on relaxation and recovery to prepare for the upcoming week.</p>
                </li>
            </ul>
        </div>
    </div>

                 
    </div>

                    
                );
            case 'section5':
                return (
                    
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
                    );
                    
            default:
                return null;
        }
    };

    return (
        <div className="main-container">
            <div className="nav-section">
                <a href="#section1" onClick={() => setActiveSection('section1')}>Cardiovascular Exercises</a>
                <a href="#section2" onClick={() => setActiveSection('section2')}>Bodyweight Exercises</a>
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
