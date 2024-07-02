import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
