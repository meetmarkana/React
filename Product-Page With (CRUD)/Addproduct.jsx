import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Addproduct({ addNewProduct }) {
  const [title, setTitle] = useState('');
  const [information, setInformation] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    addNewProduct(title, information, image);
    navigate('/');
  }

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div className="center">
      <div className="container">
        <h1>ADD ABOUT PRODUCT</h1>
        <form onSubmit={handleSubmit}>
          <h3>Product Name:</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <h3>Product Information:</h3>
          <textarea
            value={information}
            onChange={(e) => setInformation(e.target.value)}
          ></textarea>
          <h3>Select Product Image:</h3>
          <input type="file" onChange={handleChange} />
          <button type="submit">ADD Product</button>
        </form>
        <Link to="/" className="back-link">
          Back TO Product Page
        </Link>
      </div>
    </div>
  );
}

export default Addproduct;
