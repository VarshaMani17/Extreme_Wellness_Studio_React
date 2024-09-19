import React, { useState, useEffect } from 'react';
import './ProductUpload.css';

const ProductUpload = () => {
  const [product, setProduct] = useState({
    image: '',
    hoverImage: '',
    price: '',
    flavor: '',
    name: '',
    overview: '',
    benefitsAndOverview: ''
  });
  const [previewImage, setPreviewImage] = useState('');
  const [hoverPreviewImage, setHoverPreviewImage] = useState('');
  const [products, setProducts] = useState([]);

  // Load products from localStorage when the component mounts
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Handle hover image file change
  const handleHoverImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setHoverPreviewImage(reader.result);
      setProduct({ ...product, hoverImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProducts = [...products, product];
    localStorage.setItem('products', JSON.stringify(existingProducts));
    setProducts(existingProducts); // Update the state with the new product list
    setProduct({
      image: '',
      hoverImage: '',
      price: '',
      flavor: '',
      name: '',
      overview: '',
      benefitsAndOverview: ''
    });
    setPreviewImage('');
    setHoverPreviewImage('');
    alert('Product uploaded successfully!');
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  // Function to format the price as Indian Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Main Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          {previewImage && <img src={previewImage} alt="Preview" style={{ width: '100px', height: '100px' }} />}
        </div>

        <div>
          <label>Hover Image:</label>
          <input type="file" accept="image/*" onChange={handleHoverImageChange} required />
          {hoverPreviewImage && <img src={hoverPreviewImage} alt="Hover Preview" style={{ width: '100px', height: '100px' }} />}
        </div>

        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input type="text" name="flavor" placeholder="Flavor" value={product.flavor} onChange={handleChange} required />
        <textarea name="overview" placeholder="Overview" value={product.overview} onChange={handleChange} required />
        <textarea name="benefitsAndOverview" placeholder="Benefits and Overview" value={product.benefitsAndOverview} onChange={handleChange} required />

        <button type="submit">Upload Product</button>
      </form>

      <h2>Uploaded Products</h2>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            <div className="product-img-container">
              <img className="main-image" src={prod.image} alt="Product" style={{ width: '100px', height: '100px' }} />
              <img className="hover-image" src={prod.hoverImage} alt="Hover Product" style={{ width: '100px', height: '100px' }} />
            </div>
            <p>Name: {prod.name}</p>
            <p>Price: {formatCurrency(prod.price)}</p>
            <p>Flavor: {prod.flavor}</p>
            <p>Overview: {prod.overview}</p>
            <p>Benefits and Features: {prod.benefitsAndOverview}</p>
            <button onClick={() => handleDelete(index)}>Delete Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductUpload;
