import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


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
    <div className="addpost-container">
      <div className="addpost-header">
        <h2>ADD POST</h2>
      </div>
      <form onSubmit={handleSubmit} className="addpost-form">
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
      <Link to="/" className="back-link">
        Back TO Home Page
      </Link>
    </div>
  );
}

export default Addpost;