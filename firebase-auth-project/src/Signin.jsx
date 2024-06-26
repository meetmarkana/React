import React, { useState, useEffect } from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from './Config';
import Home from './Home';

function Signin() {
    const [value, setValue] = useState("")

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email)
                localStorage.setItem("email", data.user.email)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                setValue("");
                localStorage.removeItem("email");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        let userEmail = localStorage.getItem("email")
        if (userEmail) {
            setValue(userEmail)
        }
    }, [])

    return (
        <div className="container">
            {value ? <Home handleLogout={handleLogout} /> : <button onClick={handleClick}>Sign In with Google</button>}
        </div>
    )
}

export default Signin;
