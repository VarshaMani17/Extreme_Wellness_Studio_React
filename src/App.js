import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/HomePage.css'; 
import Navigation from './components/Navigation';
import Home from './components/Home';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import Login from './user/Login'; 
import Register from './user/Register';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import About from './components/About';
import Success from './components/Success';
import ProtectedRoute from './components/ProtectedRoute';
import Form from './components/Form'

const App = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegister = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
  };

  
  return (
    <Router>
      <div>
        <Navigation /> 
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/user" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
          <Route path="/login" element={<Login registeredUsers={registeredUsers} />} />
          <Route path="/user/login" element={<Login registeredUsers={registeredUsers} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/admin" element={<AdminPage />} /> 
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/aboutus" element={<About />} /> 
          <Route path="/success" element={<Success />} /> 
          <Route exact path="/form" element={<Form />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
