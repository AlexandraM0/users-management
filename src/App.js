// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import MockedDashboard from './components/MockedDashboard';

const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/mocked-dashboard" element={<MockedDashboard />} />
                </Routes>
            </Router>
    );
};

export default App;
