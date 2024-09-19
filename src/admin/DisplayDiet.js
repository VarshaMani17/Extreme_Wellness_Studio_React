import React, { useEffect, useState } from 'react';
import './DisplayDiet.css'; // Import the CSS file

const DisplayPage = () => {
  const [dietItems, setDietItems] = useState([]);

  // Load the saved diet items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('dietItems')) || [];
    setDietItems(savedItems);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedItems = dietItems.filter((_, index) => index !== indexToDelete);
    setDietItems(updatedItems);
    localStorage.setItem('dietItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="display-container">
      {dietItems.map((item, index) => (
        <div key={index} className="display-item">
          {item.dietImage && (
            <div className="image-box">
              
              <img src={item.dietImage} alt="Diet" />
            </div>
          )}
          {item.dietText && (
            <div className="text-box">
              <h3>Information</h3>
              <p>{item.dietText}</p>
            </div>
          )}
          <button className="delete-button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayPage;
