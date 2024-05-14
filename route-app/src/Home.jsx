import React from 'react';
import { Link } from 'react-router-dom';


function Home({ posts, deletepost }) {
  function handleDelete(id) {
    deletepost(id);
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome To our Page</h1>
      </div>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-description">{post.description}</p>
            <button className="delete-button" onClick={() => handleDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Link to="/add" className="add-post-link">
        ADD POST
      </Link>
    </div>
  );
}

export default Home;