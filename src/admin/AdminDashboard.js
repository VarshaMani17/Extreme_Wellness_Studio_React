import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css'; // Import the CSS file

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getUsers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Age</th>
              <th>Address</th>
              <th>District</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.gender}</td>
                  <td>{user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : ''}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>{user.district}</td>
                  <td>{user.state}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
