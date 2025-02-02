import React, { useContext, useEffect, useState } from 'react';
import './SubscriptionPopup.css'; // Create this CSS file for styling
import NoteContext from './NoteContext';

const SubscriptionPopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false)
  const{formFilled , setFormFilled} = useContext(NoteContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setFormFilled(true);
    setTimeout(() => {
      onClose();
    }, 2000); 
  };

  return (
    <div className="subscription-popup">
      <button className="close-btn" onClick={onClose}>×</button>
      <h3>Please Subscribe to My Offers</h3>
      {!subscribed ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" >Subscribe</button>
        </form>
      ) : (
        <p>Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default SubscriptionPopup;