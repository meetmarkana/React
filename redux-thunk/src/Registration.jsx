import React, { useEffect, useState } from 'react';
import { ref, set, onValue, remove } from "firebase/database";
import { database } from './FirebaseConfig';

function Registration() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUserRef = ref(database, `users/${name}`);
        set(newUserRef, { name, password })
            .then(() => {
                setName('');
                setPassword('');
            });
    }

    const handledelate=(react)=>{
        const newUser = ref(database, `users/${react}`);
        remove(newUser)
        .then(() => {
           alert("delated")
          })
          .catch((error) => {
            console.log(error);
          });
    }

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
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <label>Password: </label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <input type='submit' />
            </form>
            <h2>Registered Users</h2>
            <ul>
                
                {users.map(user => (
                 <>
                    <h2 key={user.name}>{user.name}</h2>
                    <button onClick={()=>handledelate(user.name)}>Delate</button>
                 </>
                ))}
                   
            </ul>
        </div>
    );
}

export default Registration;