import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Addproduct from './Addproduct';
import { useState } from 'react';
import Edit from './Edit';

function App() {
  const [products, setProducts] = useState([]);

  function addNewProduct(title, information, image) {
    let newProduct = {
      id: new Date().getTime(),
      title: title,
      information: information,
      image: image,
    };
    setProducts([...products, newProduct]);
  }

  function deleteProduct(id) {
    setProducts(products.filter((el) => el.id !== id));
  }

  function updateProduct(id, title, information, image) {
    setProducts(products.map(product => product.id === id ? { ...product, title: title, information: information, image: image } : product));
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home products={products} deleteProduct={deleteProduct} />} />
          <Route path="/add" element={<Addproduct addNewProduct={addNewProduct} />} />
          <Route path="/edit/:id" element={<Edit updateProduct={updateProduct} products={products} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
