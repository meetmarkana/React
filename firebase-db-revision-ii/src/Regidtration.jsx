import React, { useState, useEffect } from 'react';
import { ref, set, onValue } from "firebase/database";
import { database } from './FirebaseConfig';


function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserRef = ref(database, `users/${name}`);
    set(newUserRef, { name, password });
    setName("");
    setPassword("");
  };

  useEffect(() => {
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
      setUsers(userList);
    });
  }, []);

  return (
    <div className="registration-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Register" />
      </form>
      <h2>Registered Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Registration;
