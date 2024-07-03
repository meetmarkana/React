import React, { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from './config';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      navigate('/');
    } catch (err) {
      console.error(err);
      navigate('/login');
    }
  };

  return (
    <div className="container">
      <div className="Home-page">
        {value ? (
          <div>
            <h2>Welcome, {value}</h2>
            <p>You are signed in.</p>
          </div>
        ) : (
          <div>
            <h2>Welcome</h2>
            <p>Please sign in to continue.</p>
          </div>
        )}
      </div>
      <button onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Signup;