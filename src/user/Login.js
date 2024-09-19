import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate('/user');
        }
    }, [navigate]);



    const handleLogin = async (e) => {
        e.preventDefault();
    
        //Check for specific username and password
        const specificUsername = 'admin';
        const specificPassword = '123456';

        if (username === specificUsername && password === specificPassword) {
            navigate('/admin-page'); // Navigate to a specific page for predefined credentials
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('authToken', token);
            localStorage.setItem('username', username); // Store username
            localStorage.setItem('password', password); // Store password (Not recommended in real applications)
            console.log('Login successful');
            navigate('/user');
        } catch (err) {
            setError('Invalid username or password');
            console.error(err.response.data);
        }
    };
    

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span onClick={() => navigate('/register')}>Register here</span></p>
        </div>
    );
};

export default Login;
