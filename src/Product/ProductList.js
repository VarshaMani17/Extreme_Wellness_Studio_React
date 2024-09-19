import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  // Function to format price in INR
  const formatPriceInINR = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className="product-list-container">
            <Link to="/cart" className="cart-button">Cart</Link>
            <br/><br/><br/>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <Link to={`/product/${index}`}>
              <div className="product-img-container">
                <img className="main-image" src={product.image} alt="Main Product" />
                <img className="hover-image" src={product.hoverImage} alt="Hover Product" />
              </div>
            </Link>
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{formatPriceInINR(product.price)}</p> 
              <p className="product-flavor">Flavor: {product.flavor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
