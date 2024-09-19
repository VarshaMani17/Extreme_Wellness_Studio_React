import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Diet.css'; // Import the CSS file
import dietary from '../assert/dietary.PNG';
import physical from '../assert/physical.PNG'
import community from '../assert/community.PNG'

const Deit = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate('/details'); // Correct usage of useNavigate
  };
  const handleReadMoreClick1 = () => {
    navigate('/meal-plan'); // Correct usage of useNavigate
  };
  const handleReadMoreClick2 = () => {
    navigate('/bmi'); // Correct usage of useNavigate
  };

  const [dietItems, setDietItems] = useState([]);

  // Load the saved diet items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('dietItems')) || [];
    setDietItems(savedItems);
  }, []);

  return (
    <div className="deit-container">
      <h1 className="deit-title">Management of Obesity</h1>
      <div className="deit-cards">
        <div className="deit-card">
          <img src={dietary} alt="Dietary Changes" className="deit-image" />
          <h2 className="deit-card-title">Dietary Changes</h2>
          <p className="deit-card-description">
            Nutritious Diet with just enough calories and proper balance of nutrients leads to sustained weight loss.
          </p>
        </div>
        <div className="deit-card">
          <img src={physical} alt="Physical Activity" className="deit-image" />
          <h2 className="deit-card-title">Physical Activity</h2>
          <p className="deit-card-description">
            Weight loss is 80% about Diet and 20% about Exercise. Engage in simple physical activities for effective results.
          </p>
        </div>
        <div className="deit-card">
          <img src={community} alt="Community Support" className="deit-image" />
          <h2 className="deit-card-title">Community Support</h2>
          <p className="deit-card-description">
            Evidence suggests that Community Support leads to better Motivation and helps sustain weight loss.
          </p>
        </div>
      </div>
      <div className="deit-button-container">
        <button onClick={handleReadMoreClick} className="deit-button">
          READ MORE
        </button>
        <button onClick={handleReadMoreClick1} className="deit-button">
          MEAL PLANS
        </button>
        <button onClick={handleReadMoreClick2} className="deit-button">
          BMI CALCULATOR
        </button>
      </div>
      <div className="display-container">
      {dietItems.map((item, index) => (
        <div key={index} className="display-item">
          {item.dietImage && (
            <div className="image-box">
              <h3>Diet Image</h3>
              <img src={item.dietImage} alt="Diet" />
            </div>
          )}
          {item.dietText && (
            <div className="text-box">
              <h3>Diet Text</h3>
              <p>{item.dietText}</p>
            </div>
          )}
          
        </div>
      ))}
    </div>
    </div>
  );
};

export default Deit;
