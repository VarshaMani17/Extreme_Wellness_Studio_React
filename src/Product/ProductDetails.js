// // import React from 'react';
// // import { useParams } from 'react-router-dom';
// // import './ProductDetails.css';

// // const ProductDetail = () => {
// //   const { id } = useParams();
// //   const products = JSON.parse(localStorage.getItem('products')) || [];
// //   const product = products[id];

// //   // Function to format price in INR
// //   const formatPriceInINR = (price) => {
// //     return new Intl.NumberFormat('en-IN', {
// //       style: 'currency',
// //       currency: 'INR',
// //       minimumFractionDigits: 2,
// //       maximumFractionDigits: 2
// //     }).format(price);
// //   };

// //   return (
// //     <div>
// //       <div className="product-detail">
// //         <img src={product.image} alt="Product" />
// //         <div className="product-info">
// //           <h2>{product.name}</h2>
// //           <p><b>Price:</b> {formatPriceInINR(product.price)}</p> {/* Format price in INR */}
// //           <p><b>Flavor:</b> {product.flavor}</p>
// //           <button>Add to Cart</button>
// //           <button>Buy Now</button>
// //         </div>
// //       </div>
// //      <hr/>
// //       <div className="product-description-container">
// //         <p><b>Overview:</b><br/> {product.overview}</p>
// //         <p><b>Benefits and Features:</b><br/> {product.benefitsAndOverview}</p>
// //       </div>
// //       <br/>
// //     </div>
// //   );
// // };

// // export default ProductDetail;
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductDetails.css';

// const ProductDetail = () => {
//   const { id } = useParams();
//   const products = JSON.parse(localStorage.getItem('products')) || [];
//   const product = products[id];

//   // State to manage the quantity
//   const [quantity, setQuantity] = useState(1);

//   // Function to format price in INR
//   const formatPriceInINR = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     }).format(price);
//   };

//   // Calculate total amount based on quantity
//   const totalAmount = formatPriceInINR(product.price * quantity);

//   // Handle quantity change
//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value, 10)); // Ensure quantity is at least 1
//     setQuantity(value);
//   };

//   return (
//     <div>
//       <div className="product-detail">
//         <img src={product.image} alt="Product" />
//         <div className="product-info">
//           <h2>{product.name}</h2>
//           <p><b>Price:</b> {formatPriceInINR(product.price)}</p>
//           <p><b>Flavor:</b> {product.flavor}</p>
//           <p><b>Quantity:</b><input
//               type="number"
//               id="quantity"
//               value={quantity}
//               onChange={handleQuantityChange}
//               min="1"
//             /></p>

//           {/* Display Total Amount */}
//           <p><b>Total Amount:</b> {totalAmount}</p>

//           <button>Add to Cart</button>
//           <button>Buy Now</button>
//         </div>
//       </div>

//       <div className="product-description-container">
//         <p><b>Overview:</b><br/> {product.overview}</p>
//         <p><b>Benefits and Features:</b><br/> {product.benefitsAndOverview}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetail = () => {
  const { id } = useParams();
  const products = JSON.parse(localStorage.getItem('products')) || [];
  const product = products[id];

  const [quantity, setQuantity] = useState(1);

  const formatPriceInINR = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const totalAmount = formatPriceInINR(product.price * quantity);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10));
    setQuantity(value);
  };

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cartItems.findIndex(item => item.id === id);

    if (itemIndex > -1) {
      cartItems[itemIndex].quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    alert('Product added to cart!');
  };

  return (
    <div>
      <div className="product-detail">
        <img src={product.image} alt="Product" />
        <div className="product-info">
          <h2>{product.name}</h2><br/>
          <p><b>Price:</b> {formatPriceInINR(product.price)}</p>
          <p><b>Flavor:</b> {product.flavor}</p>
          <p><b>Quantity:</b>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </p>
          <p><b>Total Amount:</b> {totalAmount}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
<hr/>
      <div className="product-description-container">
        <p><b>Overview:</b><br/> {product.overview}</p>
        <p><b>Benefits and Features:</b><br/> {product.benefitsAndOverview}</p>
      </div><br/>
    </div>
  );
};

export default ProductDetail;
