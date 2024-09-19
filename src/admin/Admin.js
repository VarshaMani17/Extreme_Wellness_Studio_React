import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminpage.css'; // Import the CSS file

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigateToPage1 = () => {
    navigate('/admin-users');
  };

  const handleNavigateToPage2 = () => {
    navigate('/appointment-details');
  };
  const handleNavigateToPage3 = () => {
    navigate('/add-diet');
  };
  const handleNavigateToPage4 = () => {
    navigate('/product-upload');
  };
  const handleNavigateToPage5 = () => {
    navigate('/report');
  };

  return (
    <div className="container">
      <div>
      <button onClick={handleNavigateToPage3}>Upload Diet</button>
      <button onClick={handleNavigateToPage4}>Upload Product</button>
        <button onClick={handleNavigateToPage1}>User Details</button>
        <button onClick={handleNavigateToPage2}>Appointment Details</button>
        <button onClick={handleNavigateToPage5}>Weekly Report</button>
      </div>
    </div>
  );
};

export default HomePage;
