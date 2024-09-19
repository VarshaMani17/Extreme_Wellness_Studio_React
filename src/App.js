import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/HomePage.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Login from './user/Login';
import Register from './user/Register';
import Userdetails from './admin/Userdetails';
import About from './components/About';
import Success from './components/Success';
import ProtectedRoute from './components/ProtectedRoute';
import Diet from './components/Diet';
import Exercise from './components/Exercise';
import UserProfile from './user/UserProfile'; 
import ReadDiet from './components/ReadDiet';
import Admin from './admin/Admin';
import Appointments from './admin/Appointments';
import AppointmentDetails from './admin/Appointmentdetails';
import Adddiet from './admin/Adddiet';
import Addexercise from './admin/Addexercise';
import DisplayDiet from './admin/DisplayDiet';
import MealPlan from './components/MealPlan';
import BmiCalculator from './user/BmiCalculator';
import DisplayExercise from './admin/DisplayExercise';
import UnderWeight from './components/UnderWeight';
import DietMaintain from './components/DietMaintain';
import OverWeight from './components/OverWeight';
import Obesity from './components/Obesity';
import WeeklyReport from './admin/WeeklyReport';
import ProductDetail from './Product/ProductDetails';
import ProductList from './Product/ProductList';
import ProductUpload from './Product/ProductUpload';
import Cart from './Product/Cart';
const App = () => {

  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegister = (user) => {
    setRegisteredUsers([...registeredUsers, user]);
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (

      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user" element={<ProtectedRoute><UserPage /></ProtectedRoute>} />
            <Route path="/login" element={<Login registeredUsers={registeredUsers} onLogin={handleLogin} />} />
            <Route path="/user/login" element={<Login registeredUsers={registeredUsers} onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/admin-users" element={<Userdetails />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/success" element={<Success />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/profile" element={<UserProfile user={user} />} />
            <Route path="/details" element={<ReadDiet />} />
            <Route path="/admin-page" element={<Admin />} />
            <Route path="/appointment" element={<Appointments />} />
            <Route path="/appointment-details" element={<AppointmentDetails />} />
            <Route path="/add-diet" element={<Adddiet />} />
            <Route path="/display" element={<DisplayDiet />} />
            <Route path="/meal-plan" element={<MealPlan />} />
            <Route path="/bmi" element={<BmiCalculator />} />
            <Route path="/underweight" element={<UnderWeight />} />
            <Route path="/dietmaintain" element={<DietMaintain />} />
            <Route path="/overweight" element={<OverWeight />} />
            <Route path="/obesity" element={<Obesity />} />
            <Route path="/report" element={<WeeklyReport />} />
            <Route path="/add-exercise" element={<Addexercise />} />
            <Route path="/display-exercise" element={<DisplayExercise />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product-upload" element={<ProductUpload />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
   
  );
};

export default App;
