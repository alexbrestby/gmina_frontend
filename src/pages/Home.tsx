import React, { useEffect, useState } from 'react';
import UserService from '../services/userService';

interface User {
  id: number;
  username: string;
  email: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.fetchUsers();
        console.log(response);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.id} - {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

