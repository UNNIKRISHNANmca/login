
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === formData.username && storedUser.password === formData.password) {
      history.push('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div classname="paragraph">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <input 
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

