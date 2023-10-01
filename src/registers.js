import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./"
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      alert('Username and password cannot be empty');
    } else {
      localStorage.setItem('user', JSON.stringify(formData));
      alert('Registered successfully');
      
      history.push('/login');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div className="input">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          required
        />
      <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
      <br></br>
      <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
