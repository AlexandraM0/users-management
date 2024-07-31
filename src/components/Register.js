import React, { useState } from 'react';
import registerimg from '../images/register.png';
import '../styles/login-register.scss';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/webapp/login', username, password);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
<>
    <div className="container">
      <div className="container-card">
      <div className="image-container">
        <img  alt="register" src={registerimg} />
      </div>

      <div className="form-container">
      <form className="login-form">
        <h2>Register</h2>
        <label>Email</label>
        <input  type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>

        <label>Username</label>
        <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>

        <label>Password</label>
        <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>

        <button type="submit" onSubmit={handleRegister}>Register</button>
        <div className="button-text">
          <a href="/login">Do you already have an account? Log in!</a>
        </div>
      </form>
      
      </div>
      </div>
    </div>
    </>
  );
}

export default Register;
