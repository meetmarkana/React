import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './App.css';

function Edit({ posts, updatePost }) {
  const { id } = useParams();
  let ans = posts.find(post => post.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [content, setContent] = useState(ans.content);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updatePost(ans.id, title, content);
    navigate('/');
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Edit Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button type="submit">UPDATE POST</button>
        </form>
        <Link to="/" className="back-link">Back To Home Page</Link>
      </div>
    </div>
  );
}

export default Edit;
