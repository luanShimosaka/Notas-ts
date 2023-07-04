import React, { useEffect, useState } from 'react';
import api from './services/api';
import './App.css';

interface User {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get<User[]>('/users').then(response => {
      setUsers(response.data);
    })
  }, []);
  return (
    <div className='App'>
      { users.map(user => <p>{user.name}</p>) }
    </div>
  );
}

export default App;
