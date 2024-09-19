import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Adddiet.css'; // Import the CSS file

const HomePage = () => {
  const [dietImage, setDietImage] = useState(null);
  const [dietText, setDietText] = useState('');
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setDietImage(imageUrl);
  };

  const handleTextChange = (e) => {
    setDietText(e.target.value);
  };

  const handleNavigateToDisplay = () => {
    const savedItems = JSON.parse(localStorage.getItem('dietItems')) || [];
    const newItem = { dietImage, dietText };
    const updatedItems = [...savedItems, newItem];
    localStorage.setItem('dietItems', JSON.stringify(updatedItems));
    navigate('/display');
  };

  return (
    <div className="container">
      <div className="upload-container">
        <div className="upload-box">
          <h3>Upload Diet Image</h3>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div className="upload-box">
          <h3>Enter Diet Text</h3>
          <textarea 
            value={dietText} 
            onChange={handleTextChange} 
            placeholder="Enter diet information here..." 
          />
        </div>
      </div>
      <div>
        <button onClick={handleNavigateToDisplay}>Upload and View</button>
      </div>
    </div>
  );
};

export default HomePage;
