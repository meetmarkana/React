import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home({ products, deleteProduct }) {
  const [searchItem, setSearchItem] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const filteredProducts = products
    .filter((el) =>
      el.title.toLowerCase().includes(searchItem.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'titleAsc') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'titleDesc') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  function handleDelete(id) {
    deleteProduct(id);
  }

  return (
    <div className="center">
      <h1 className="hello">Welcome To our Product Page</h1>
      <input
        type="text"
        placeholder="Search Product"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        className="search-bar"
      />
      <select
        className="sort-select"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Sort By</option>
        <option value="titleAsc">Title Ascending</option>
        <option value="titleDesc">Title Descending</option>
      </select>
      <div className="products-container">
        {filteredProducts.map((el) => (
          <div key={el.id} className="product-card">
            <img src={URL.createObjectURL(el.image)} alt="product" />
            <h3>Product Name: {el.title}</h3>
            <p>Information: {el.information}</p>
            <button onClick={() => handleDelete(el.id)} className="button">
              Delete Product
            </button>
            <Link to={`/edit/${el.id}`}>
              <button className="button">Edit Product</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/add" className="add-product-link">
        ADD Product
      </Link>
    </div>
  );
}

export default Home;
