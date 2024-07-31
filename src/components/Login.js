import React, { useState } from 'react';
import loginimg from '../images/login.png';
import '../styles/login-register.scss';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/webapp/auth/login', username, password);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="container">
      <div className="container-card">
        <div className="image-container">
          <img alt="login" src={loginimg} />
        </div>

        <div className="form-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Log In</button>
            <div className="button-text">
              <a href="/register">You don't have an account? Sign up now!</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
