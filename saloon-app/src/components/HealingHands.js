import React, { useContext, useState, useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import './HealingHands.css';
import lav from './images/natural-elements-spa-with-bath-salts.jpg';
import therapy from './images/cozy-composition-with-decorative-candles-young-tree-branches-wooden-surface-rustic-style.jpg';
import meditating from './images/13404881_5244736-removebg-preview.png';
import soak from './images/spa-concept-closeup-beautiful-spa-products-spa-salt-flowers-horizontal.jpg';
import NoteContext from './NoteContext';
import { useNavigate } from 'react-router-dom';
import healingVid1 from './videos/healingVid1.mp4';
import healingVid2 from './videos/healingVid2.mp4';

const HealingHands = () => {
  const { selectedHand, setSelectedHand, setBookingsCount } = useContext(NoteContext);
  const [addedProducts, setAddedProducts] = useState(() => {
    // Initialize addedProducts from localStorage if it exists
    const savedProducts = localStorage.getItem('addedProducts');
    return savedProducts ? JSON.parse(savedProducts) : {};
  });
  const Navigate = useNavigate();

  // Save addedProducts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
  }, [addedProducts]);

  const products = [
    {
      name: 'Lavender Bath Salts',
      rating: 4.8,
      tag: 'Bestseller',
      imageSrc: lav,
      description: 'Soothing blend for deep relaxation'
    },
    {
      name: 'Aromatherapy Candles',
      rating: 4.9,
      tag: 'New',
      imageSrc: therapy,
      description: 'Pure essential oil infused soy wax'
    },
    {
      name: 'Healing Mineral Soak',
      tag: 'Popular',
      imageSrc: soak,
      description: 'Rich in natural minerals and herbs'
    }
  ];

  const handleAddRemoveProduct = (productName) => {
    if (addedProducts[productName]) {
      // Remove product
      setAddedProducts((prev) => {
        const newAddedProducts = { ...prev };
        delete newAddedProducts[productName];
        return newAddedProducts;
      });
      setSelectedHand((prev) => prev.filter(item => item !== productName));
      setBookingsCount((prev) => prev - 1);
    } else {
      // Add product
      setAddedProducts((prev) => ({
        ...prev,
        [productName]: true
      }));
      setSelectedHand((prev) => [...prev, productName]);
      setBookingsCount((prev) => prev + 1);
    }
  };

  return (
    <div className="hero">
      <div className="heal-container">
        <div className="heal-hero-content">
          <div className="hero-sectionwithImg">
            <div className="hero-text">
              <h1 className="brand-name">Healing Hands</h1>
              <h2 className="brand-subtitle">by Milli</h2>
              <p className="hero-description">
                Handcrafted therapeutic products for your mind, body, and soul
              </p>
              <div className="cta-buttons">
                <button className="primary-btn" onClick={()=> Navigate('/benefits')}>
                  Learn More
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
            </div>
            <img src={meditating} className="therapyman" alt="Meditating therapy" />
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <span className="product-tag">{product.tag}</span>
                <div className="product-image">
                  <img src={product.imageSrc} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <button
                      className={`book-service-btn${addedProducts[product.name] ? '-remove' : ''}`}
                      onClick={() => handleAddRemoveProduct(product.name)}
                    >
                      {addedProducts[product.name] ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h1 className="video-hed">Videos About the Products</h1>
          <div className="video-section">
            <video
              src={healingVid1}
              controls
              className="healing-video"
            />
            <video
              src={healingVid2}
              controls
              className="healing-video"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealingHands;