import { useEffect, useRef, useState } from 'react';
import './ImageCarousel.css'
const ImageCarousel = ({ images }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    let allImagesLoaded = 0;
    const totalImages = images.length * 2; 
    const handleImageLoad = () => {
      allImagesLoaded++;
      if (allImagesLoaded === totalImages) {
        setIsLoaded(true);
      }
    };
    if (carouselRef.current) {
      carouselRef.current.style.animation = 'none';
      // Trigger reflow
      void carouselRef.current.offsetWidth;
      carouselRef.current.style.animation = null;
    }
  }, [images]);

  return (
    <div className="image-carousel">
      <div 
        ref={carouselRef}
        className={`carousel-track ${isLoaded ? 'animate' : ''}`}
      >
        {images.map((src, index) => (
          <img
            key={`original-${index}`}
            src={src}
            alt={`Project ${index + 1}`}
            className="carousel-image"
            onLoad={() => setIsLoaded(true)}
          />
        ))}
        {/* Duplicated images for seamless loop */}
        {images.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            alt={`Project ${index + 1}`}
            className="carousel-image"
            onLoad={() => setIsLoaded(true)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;