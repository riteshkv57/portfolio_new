import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', username, password);
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    console.log('Forgot Password clicked');
  };

  return (
    <div className="container2" >
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <a href="#">Forget Password</a>
      </form>
    </div>
    </div>
  );
};

export default Login;
