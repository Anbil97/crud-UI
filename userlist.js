import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = () => {
  // Sample data - replace this with your actual data
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more user data as needed
  ];

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Link to={`/edit-user/${user.id}`}>Edit</Link>
            <Link to={`/profile/${user.id}`}>Profile</Link>
            {/* Add a delete button and handle delete functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
