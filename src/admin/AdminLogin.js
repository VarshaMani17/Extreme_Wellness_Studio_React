import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    secretKey: ''
  });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const ALLOWED_EMAIL = 'admin@gmail.com'; // The allowed admin email
  const ALLOWED_SECRET_KEY = '123456'; // The allowed secret key

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errors = {};
    if (!credentials.email) errors.email = 'Email is required';
    if (!credentials.secretKey) errors.secretKey = 'Secret Key is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (
        credentials.email === ALLOWED_EMAIL &&
        credentials.secretKey === ALLOWED_SECRET_KEY
      ) {
        console.log('Admin login successful');
        // Navigate to the admin dashboard on successful login
        navigate('/admin-dashboard');
      } else {
        setLoginError('Invalid email or secret key');
      }
    }
  };

  return (
    <div className="App">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Secret Key:</label>
            <input
              type="text"
              name="secretKey"
              value={credentials.secretKey}
              onChange={handleChange}
            />
            {errors.secretKey && <span className="error">{errors.secretKey}</span>}
          </div>
          <button type="submit">Login</button>
          {loginError && <div className="login-error">{loginError}</div>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
