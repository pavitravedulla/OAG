import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ updated
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ new

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: login logic
    alert(`Logged in as: ${email}`);
    navigate('/'); // ✅ navigate instead of history.push
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
