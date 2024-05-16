import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function Addpost({ addnewPost }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addnewPost(title, description);
    navigate('/');
  }

  return (
    <div className="container">
      <div className="card">
        <h2>ADD POST</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit">ADD POST</button>
        </form>
        <Link to="/" className="back-link">Back TO Home Page</Link>
      </div>
    </div>
  );
}

export default Addpost;
