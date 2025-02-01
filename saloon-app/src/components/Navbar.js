import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import NoteContext from './NoteContext';
import logo from './images/freepik__improve-the-text-and-make-the-logo-pop-out-and-mak__14437.png';
import './Navbar.css';
import faceArt from './images/openart-image_WtMVDkpd_1737812086149_raw.jpg';
import hairService from './images/woman-hairdresser-salon.jpg';
import bodyWellness from './images/spa-and-wellness-1-body-massage.png';
import beauty from './images/fashion-beauty-portrait-young-brunette-woman-with-evening-stylish-makeup-perfect-clean-skin-sexy-model-with-hair-bun-posing-studio-near-black-wall-with-pink-bright-natural-lips.jpg';

const Navbar = () => {
  const serviceCategories = [
    { name: 'Face Care', image: faceArt, services: ['Aesthetic Facials', 'PMU for eyebrows', 'PMU for eyeliner', 'PMU for lips', 'Skin analysis', 'Deep cleansing treatments'] },
    { name: 'Hair Services', image: hairService, services: ['Haircuts', 'Hair coloring', 'Highlights', 'Balayage', 'Hair treatments', 'Styling'] },
    { name: 'Body Wellness', image: bodyWellness, services: ['Aroma therapy', 'Body therapy', 'Massage treatments', 'Reflexology', 'Stress relief treatments', 'Body scrubs'] },
    { name: 'Beauty Enhancements', image: beauty, services: ['Eyelash extensions', 'Nail art', 'Permanent manicure', 'Gel nails', 'Nail design', 'Nail treatments'] }
  ];
  const CartCounter = ({ count }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      if (count > 0) {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 300);
        return () => clearTimeout(timer);
      }
    }, [count]);

    return (
      <div className="cart-wrapper">
        <ShoppingCart className="cart-icon" size={20} />
        {count > 0 && (
          <div className={`cart-counter ${animate ? 'bounce' : ''}`}>
            {count}
          </div>
        )}
      </div>
    );
  };
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { isHeroVisible } = useContext(NoteContext);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const { bookingsCount } = useContext(NoteContext);
  const navigate = useNavigate();
  const { servicesRef, setActiveCategory } = useContext(NoteContext);
  const allServices = serviceCategories.flatMap(category => category.services);

  const filteredServices = searchQuery ? allServices.filter(service => service.toLowerCase().includes(searchQuery.toLowerCase())) : [];

  const getCategoryForService = (serviceName) => {
    return serviceCategories.find(category =>
      category.services.some(service =>
        service.toLowerCase() === serviceName.toLowerCase()
      )
    );
  };

  const handleSearch = (event, selectedService = null) => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }

    const nearestMatch = !selectedService && filteredServices.length > 0 ? filteredServices[0] : null;
    const serviceToSearch = selectedService || nearestMatch || searchQuery;

    if (serviceToSearch) {
      setSearchTerm(serviceToSearch);
      const category = getCategoryForService(serviceToSearch);
      setActiveCategory(category ? category.name : null);

      navigate('/');
      setShowRecommendations(false);

      setTimeout(() => {
        if (servicesRef.current) {
          servicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const handleRecommendationClick = (selectedService) => {
    handleSearch(null, selectedService);
    setSearchQuery('');
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      setShowRecommendations(filteredServices.length > 0);
    }
  }, [searchQuery]);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="my-lnk" onClick={handleLinkClick}>
        <div className="logo-container">
          <img src={logo} alt="Milli Hair Saloon Logo" className="logo" />
          <span className="salon-name">Milli Kotian</span>
        </div>
      </Link>

      <div className="mobile-menu-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {isDropdownOpen ? <X /> : <Menu />}
      </div>

      <div className={`nav-links ${isDropdownOpen ? 'dropdown-open' : ''}`}>
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About Me</Link>
        <Link to="/healing" onClick={handleLinkClick}>Healing Hands</Link>
        <Link to="/book" className="cart-link" onClick={handleLinkClick}>
          <CartCounter count={bookingsCount} />
          <span className="cart-text">Cart</span>
        </Link>
        <div className="milli-search-container">
          <form onSubmit={handleSearch} className={`milli-search-form${isHeroVisible ? '-hide' : ''}`}>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="milli-search-input"
            />
            <button type="submit" className="milli-search-button">
              <Search size={18} color="white" />
            </button>
          </form>
          {(searchQuery.length > 0 && showRecommendations && !isHeroVisible) && (
            <ul className="nav-search-recommendations">
              {filteredServices.map(service => (
                <li key={service} onClick={() => handleRecommendationClick(service)}>
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
