import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import './BmiCalculator.css';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [dietPlan, setDietPlan] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      determineDietPlan(bmiValue);
    }
  };

  const determineDietPlan = (bmiValue) => {
    let plan = '';
    if (bmiValue < 18.5) {
      plan = `
        <h3 align='center'><b>Underweight</b></h3>
        <h3>Diet Plan </h3>
        <ul>
          <li>Increase your calorie intake with nutrient-rich foods.</li>
          <li>Include protein-rich foods such as lean meats, eggs, and legumes.</li>
          <li>Consume healthy fats found in nuts, seeds, and avocados.</li>
          <li>Have frequent, smaller meals throughout the day.</li>
        </ul>
        <h3>Workout Plan:</h3>
        <ul>
          <li>Focus on strength training to build muscle mass.</li>
          <li>Include exercises like weight lifting, resistance training, and bodyweight exercises.</li>
          <li>Avoid excessive cardio to prevent further weight loss.</li>
          <li>Ensure adequate rest and recovery between workouts.</li>
        </ul>
        <h3>Food Recommendations:</h3>
        <ul>
          <li>High-calorie foods like nuts, seeds, dried fruits, and whole-grain bread.</li>
          <li>Protein-rich foods such as chicken, fish, tofu, and dairy products.</li>
          <li>Healthy fats from olive oil, avocados, and fatty fish.</li>
          <li>Carbohydrate-rich foods like brown rice, quinoa, and sweet potatoes.</li>
        </ul>
        <div class="link-container">
        <a href="/underweight" class="link-button">View More</a>
      </div>
      `;
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      plan = `
      <h3 align='center'><b>Healthy Weight</b></h3>
        <h3>Diet Plan </h3>
        <ul>
          <li>Maintain a balanced diet with a variety of nutrients.</li>
          <li>Include fruits, vegetables, whole grains, and lean proteins.</li>
          <li>Stay hydrated and limit sugary and processed foods.</li>
          <li>Monitor portion sizes and practice mindful eating.</li>
        </ul>
        <h3>Workout Plan:</h3>
        <ul>
          <li>Incorporate a mix of cardio and strength training.</li>
          <li>Include exercises like jogging, cycling, weight lifting, and yoga.</li>
          <li>Aim for at least 150 minutes of moderate exercise per week.</li>
          <li>Focus on consistency and variety in your workouts.</li>
        </ul>
        <h3>Food Recommendations:</h3>
        <ul>
          <li>Include a variety of fruits and vegetables in your meals.</li>
          <li>Opt for whole grains like oats, brown rice, and quinoa.</li>
          <li>Choose lean proteins such as chicken, fish, and legumes.</li>
          <li>Limit intake of processed foods and sugary beverages.</li>
        </ul>
        <div class="link-container">
        <a href="/dietmaintain" class="link-button">View More</a>
      </div>
      `;
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      plan = `
         <h3 align='center'><b>Overweight</b></h3>
        <h3>Diet Plan Overweight:</h3>
        <ul>
          <li>Focus on reducing calorie intake while maintaining nutritional balance.</li>
          <li>Include more fiber-rich foods like vegetables, fruits, and whole grains.</li>
          <li>Limit intake of high-calorie and sugary foods.</li>
          <li>Increase physical activity and consider portion control.</li>
        </ul>
        <h3>Workout Plan:</h3>
        <ul>
          <li>Incorporate cardio exercises like brisk walking, running, or swimming.</li>
          <li>Add strength training to build muscle and boost metabolism.</li>
          <li>Aim for at least 300 minutes of moderate exercise per week.</li>
          <li>Consider high-intensity interval training (HIIT) for effective fat burning.</li>
        </ul>
        <h3>Food Recommendations:</h3>
        <ul>
          <li>Focus on low-calorie, nutrient-dense foods like vegetables and lean proteins.</li>
          <li>Incorporate high-fiber foods such as whole grains, legumes, and fruits.</li>
          <li>Avoid sugary snacks and drinks, and opt for water or herbal teas.</li>
          <li>Consider portion control and mindful eating practices.</li>
        </ul>
        <div class="link-container">
        <a href="/overweight" class="link-button">View More</a>
      </div>
      `;
    } else {
      plan = `
        <h3 align='center'><b>Obesity</></h3>
        <h3>Diet Plan</h3>
        <ul>
          <li>Adopt a low-calorie diet with a focus on whole foods.</li>
          <li>Emphasize vegetables, lean proteins, and healthy fats.</li>
          <li>Minimize processed foods and refined sugars.</li>
          <li>Consult with a healthcare professional for personalized guidance.</li>
        </ul>
        <h3>Workout Plan:</h3>
        <ul>
          <li>Start with low-impact exercises like walking, swimming, or cycling.</li>
          <li>Gradually increase intensity as your fitness level improves.</li>
          <li>Incorporate strength training to preserve muscle mass while losing fat.</li>
          <li>Consider working with a trainer or joining a structured fitness program.</li>
        </ul>
        <h3>Food Recommendations:</h3>
        <ul>
          <li>Focus on low-calorie, high-fiber foods like vegetables, fruits, and whole grains.</li>
          <li>Choose lean proteins such as chicken, turkey, fish, and legumes.</li>
          <li>Avoid processed foods, sugary snacks, and high-fat foods.</li>
          <li>Monitor portion sizes and avoid emotional eating.</li>
        </ul>
        <div class="link-container">
        <a href="/obesity" class="link-button">View More</a>
      </div>
      `;
    }
    setDietPlan(plan);
  };

  return (
    <div className="bmi-calculator-container">
      <div className="bmi-calculator">
        <h1>BMI Calculator</h1>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <br />
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>
      {bmi && (
        <div className="bmi-result-container">
          <h2>Your BMI: {bmi}</h2>
          <div dangerouslySetInnerHTML={{ __html: dietPlan }} />
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
