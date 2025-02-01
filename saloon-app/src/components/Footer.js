import React, { useState } from 'react';
import './Footer.css';
import {
  Search, MapPin, Phone, Mail,
  Instagram, Facebook, Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false); // State to track subscription status
  const [email, setEmail] = useState(''); // State to store the email input

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form submission
    if (email) { // Check if email is not empty
      setIsSubscribed(true); // Set subscription status to true
      setEmail(''); // Clear the email input
    }
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About The Spa</h4>
            <p>It is your sanctuary for beauty and wellness. We provide premium services to help you look and feel your best.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/milikotiann/" className="social-icon" target='_blank' ><Instagram size={20} /></a>
              <a href="" className="social-icon"><Facebook size={20} /></a>
              <a href="https://www.linkedin.com/in/mili-kotian-52a8701b4/?originalSubdomain=in" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/about">Healing Hands</Link></li>
              <li><Link to="/book">Cart</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.google.com/maps/place/Mili+Aesthetic+Spa+And+Bridal+Studio/@12.9279326,77.5552599,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3e2ec57f08f9:0x4a8e9dcce1c38af6!8m2!3d12.9279326!4d77.5552599!16s%2Fg%2F11t6s9rjx6?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                  <MapPin size={16} /> Mili Aesthetic Spa, Bengaluru
                </a>
              </li>
              <li>
                <a href="tel:+919980825112" target="_blank" rel="noopener noreferrer">
                  <Phone size={16} /> +919980825112
                </a>
              </li>
              <li>
                <a href="mailto:millikotian@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={16} /> millikotian@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for updates and special offers.</p>
            {isSubscribed ? (
              <p className="subscribed-message">Thank you for subscribing!</p> // Display subscribed message
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  required
                />
                <button type="submit" className="newsletter-button">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Milli Kotian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;