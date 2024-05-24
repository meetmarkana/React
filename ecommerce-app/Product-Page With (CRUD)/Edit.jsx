import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Edit({ products, updateProduct }) {
  const { id } = useParams();
  let ans = products.find(product => product.id === parseInt(id));
  const [title, setTitle] = useState(ans.title);
  const [information, setInformation] = useState(ans.information);
  const [image, setImage] = useState(ans.image);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    updateProduct(ans.id, title, information, image);
    navigate('/');
  }

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  return (
    <div className="center">
      <div className="container">
        <h1>Edit Page</h1>
        <form onSubmit={handleSubmit}>
          <h3>Edit Product Name:</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          <h3>Edit Product Information:</h3>
          <textarea
            value={information}
            onChange={(e) => setInformation(e.target.value)}
          ></textarea>
          <h3>Edit Product Image:</h3>
          <input type="file" onChange={handleChange} />
          <button type="submit">UPDATE PRODUCT</button>
        </form>
        <Link to="/" className="back-link">
          Back To Product Page
        </Link>
      </div>
    </div>
  );
}

export default Edit;
