import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home({ posts, deletPost }) {
  function handleDelet(id) {
    deletPost(id);
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Welcome To our Page</h1>
        {posts.map((el) => (
          <div key={el.id} className="post-card">
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <button onClick={() => handleDelet(el.id)}>Delete</button>
            <Link to={`/edit/${el.id}`}>
              <button>Edit</button>
            </Link>
          </div>
        ))}
        <Link to="/add" className="add-post-link">ADD POST</Link>
      </div>
    </div>
  );
}

export default Home;
