import React from 'react';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { facebookProvider } from './config';

const FacebookLoginButton = () => {
  const navigate = useNavigate();

  const handleFacebookLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate('/');
    } catch (error) {
      console.error("Error logging in with Facebook:", error);
    }
  };

  return (
    <button onClick={handleFacebookLogin}>
      Login with Facebook
    </button>
  );
};

export default FacebookLoginButton;