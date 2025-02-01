import React, { useState, useEffect, useRef } from 'react';
import customerEmily from './images/unnamed.png';
import customerMichael from './images/unnamed (1).png';
import customerSarah from './images/fashion-beauty-portrait-young-brunette-woman-with-evening-stylish-makeup-perfect-clean-skin-sexy-model-with-hair-bun-posing-studio-near-black-wall-with-pink-bright-natural-lips.jpg';
import soumyaImg from './images/unnamed (2).png';
import NahaRao from './images/unnamed (3).png';
import { Star } from 'lucide-react';
import './CustomerRating.css';

const customerRatings = [
  {
    name: "Shruthi Rao",
    photo: customerMichael,
    rating: 5,
    review: "Mili is my personal aesthetician who cares about my skin as I do and gives a treatment which suits the individual skin type."
  },
  {
    name: "Neha Rao",
    photo: NahaRao,
    rating: 5,
    review: "Thanks to Mili my wedding was one smooth ride. I did not have to worry about my appearance at all."
  },
  {
    name: "Sudeshna",
    photo: customerEmily,
    rating: 5,
    review: "I've been visiting here for the past 6 months, and the service has been really good."
  },
  {
    name: "Sowmeya Subramanian",
    photo: soumyaImg,
    rating: 5,
    review: "I've been coming here regularly and the experience has been nothing short of amazing."
  },
];

const duplicatedRatings = [...customerRatings, ...customerRatings];

function CustomerRating() {
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const calculateTotalWidth = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current.querySelector('.rating-card').offsetWidth;
        const totalCardsWidth = cardWidth * customerRatings.length; // Use original ratings length
        carouselRef.current.style.setProperty('--total-width', `${totalCardsWidth}px`);
      }
    };

    const handleAnimation = () => {
      if (carouselRef.current) {
        carouselRef.current.style.animation = 'none';
        void carouselRef.current.offsetWidth;
        carouselRef.current.style.animation = null;
      }
    };

    const imagesLoaded = duplicatedRatings.length;
    let loadedCount = 0;

    const imageElements = carouselRef.current.querySelectorAll('img');
    imageElements.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesLoaded) {
          setIsLoaded(true);
          calculateTotalWidth();
          handleAnimation();
        }
      };
    });

    // Calculate width on resize
    window.addEventListener('resize', calculateTotalWidth);
    return () => window.removeEventListener('resize', calculateTotalWidth);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="customer-ratings-section">
      <h2>What My Clients Say</h2>
      <div
        ref={carouselRef}
        className={`carousel-track ${isLoaded ? 'animate' : ''}`}
      >
        {duplicatedRatings.map((rating, index) => (
          <div
            key={`${rating.name}-${index}`} // Unique key combining name and index
            className="rating-card"
          >
            <div className="customer-photo-wrapper">
              <img
                src={rating.photo}
                alt={rating.name}
                className="customer-photo"
              />
            </div>
            <div className="rating-stars">
              {[...Array(rating.rating)].map((_, i) => (
                <span key={i} className='star'>⭐</span> // Add key for stars
              ))}
            </div>
            <p className="rating-review">{rating.review}</p>
            <p className="rating-name">- {rating.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerRating;