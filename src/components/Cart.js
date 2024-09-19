// src/components/Cart.js
import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext'; // Adjust the path if necessary
import { QRCodeSVG } from 'qrcode.react'; // Import QRCodeSVG component
import './Cart.css'; // Add your styles here

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showQRCode, setShowQRCode] = useState(false);
  
  // Sample user details
  const userName = 'Varsha Mani';
  const userEmail = 'varshatheeran@okhdfcbank';

  if (cartItems.length === 0) {
    return <h2>Your cart is empty!</h2>;
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleBuyNow = () => {
    setShowQRCode(true);
  };

  // Construct the payment URL with user details
  const paymentURL = `https://pay.example.com?name=${encodeURIComponent(userName)}&email=${encodeURIComponent(userEmail)}`;

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Total Amount: ₹{totalAmount}</h2>
        <button className="buy" onClick={handleBuyNow}>Buy Now</button>
        {showQRCode && (
          <div className="qr-code">
            <h2>Scan to Proceed with Payment</h2>
            <QRCodeSVG value={paymentURL} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
