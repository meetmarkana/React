import React, { useState, useEffect } from 'react';
import { ref, set, onValue, remove, update } from "firebase/database";
import { database } from './FirebaseConfig';

function Registration() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRef = ref(database, `users/${name}`);
    if (isEditing) {
      update(userRef, { name, password });
      setIsEditing(false);
    } else {
      set(userRef, { name, password });
    }
    setName("");
    setPassword("");
  };

  const handleEdit = (user) => {
    setName(user.name);
    setPassword(user.password);
    setIsEditing(true);
  };    

  const handleDelete = (username) => {
    const userRef = ref(database, `users/${username}`);
    remove(userRef)
      .then(() => {
        alert("User Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const userRef = ref(database, 'users');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList = Object.keys(data).map((key) => ({
          name: key,
          ...data[key]
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  return (
    <div className="registration-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value={isEditing ? "Update" : "Register"} />
      </form>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {user.name}
            <button onClick={() => handleEdit(user)}>Update</button>
            <button onClick={() => handleDelete(user.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registration;