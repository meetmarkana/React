import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { facebookProvider } from './config';

const FacebookAuth = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/');
    } catch (error) {
      console.error('Error during Facebook login', error);
    }
  };

  return (
    <button onClick={handleLogin} className="facebook-login-button">
      Login with Facebook
    </button>
  );
};

export default FacebookAuth;