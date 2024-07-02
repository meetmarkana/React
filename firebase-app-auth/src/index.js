import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import FacebookLoginButton from './FacebookLoginButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <FacebookLoginButton />
    </Router>
  </React.StrictMode>
);
