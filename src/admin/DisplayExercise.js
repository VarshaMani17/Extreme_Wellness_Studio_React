import React, { useEffect, useState } from 'react';
import './DisplayDiet.css'; // Ensure you update the CSS file name accordingly

const DisplayPage = () => {
  const [exerciseItems, setExerciseItems] = useState([]);

  // Load the saved exercise items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('exerciseItems')) || [];
    setExerciseItems(savedItems);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedItems = exerciseItems.filter((_, index) => index !== indexToDelete);
    setExerciseItems(updatedItems);
    localStorage.setItem('exerciseItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="display-container">
      {exerciseItems.map((item, index) => (
        <div key={index} className="display-item">
          {item.exerciseImage && (
            <div className="image-box">
              <img src={item.exerciseImage} alt="Exercise" />
            </div>
          )}
          {item.exerciseText && (
            <div className="text-box">
              <h3>Information</h3>
              <p>{item.exerciseText}</p>
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
