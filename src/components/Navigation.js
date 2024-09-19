import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assert/logo.jpg'
const Navigation = () => (

  <div className="nav-container">
    <div className="content">
     
    </div>
    <div className="nav-buttons">
      <div className="header">
        <img src={logo} alt="Logo" width="50" height="50" />
        <p><strong>Extreme Wellness Studio</strong></p>
      </div>

      <Link to="/" className="nav-button">Home</Link>
      <Link to="/success" className='nav-button'>success Stories</Link>
      <Link to="/aboutus" className="nav-button">About us</Link>
      <Link to="/login" className="nav-button">Login/Register</Link>
    </div>
  </div>

);

export default Navigation;






















