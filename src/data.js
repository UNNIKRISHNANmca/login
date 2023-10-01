import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUserData(response.data); // Set the fetched data to state
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 
  return (
    <div>
        <Navbar />
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Email</th>
            <th>
                age
            </th>
            <th>gender</th>
          </tr>
        </thead>
        <tbody>
          {userData?.users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
