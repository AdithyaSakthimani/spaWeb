import React, { useEffect, useRef } from 'react';

const ScrollingHeroBackground = () => {
  const containerRef = useRef(null);
  const backgroundsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const backgrounds = backgroundsRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!container) return;
      
      const scrolled = window.scrollY;
      
      backgrounds.forEach((bg, index) => {
        // Different speeds for each layer
        const speed = (index + 1) * 0.2;
        const yPos = -(scrolled * speed);
        
        // Apply transform with perspective for 3D effect
        bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
      });

      animationFrameId = requestAnimationFrame(scroll);
    };

    window.addEventListener('scroll', () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(scroll);
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Layer 1: Distant mountains */}
      <div
        ref={el => backgroundsRef.current[0] = el}
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, #2a0845 0%, #6441A5 100%)',
          opacity: 0.7,
          willChange: 'transform'
        }}
      />
      
      {/* Layer 2: Mid-ground elements */}
      <div
        ref={el => backgroundsRef.current[1] = el}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.3) 0%, rgba(76, 0, 255, 0) 70%)',
          opacity: 0.5,
          willChange: 'transform'
        }}
      />
      
      {/* Layer 3: Foreground particles */}
      <div
        ref={el => backgroundsRef.current[2] = el}
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))',
          backgroundRepeat: 'repeat',
          opacity: 0.3,
          willChange: 'transform'
        }}
      />
    </div>
  );
};

export default ScrollingHeroBackground;