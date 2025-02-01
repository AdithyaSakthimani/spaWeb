import React, { useState, useRef, useEffect, useContext } from 'react';
import heroImg from './images/hero-img-final.png';
import './Home.css';
import faceArt from './images/openart-image_WtMVDkpd_1737812086149_raw.jpg'
import hairService from './images/woman-hairdresser-salon.jpg'
import bodyWellness from './images/spa-and-wellness-1-body-massage.png'
import beauty from './images/fashion-beauty-portrait-young-brunette-woman-with-evening-stylish-makeup-perfect-clean-skin-sexy-model-with-hair-bun-posing-studio-near-black-wall-with-pink-bright-natural-lips.jpg'
import makeUpImg from './images/portrait-model-with-perfect-skin-bright-make-up-big-pink-lips-necklace.jpg'
import bridalImg from './images/photorealistic-lohri-festival-with-woman-celebrating.jpg'
import healImg from './images/WhatsApp Image 2025-01-30 at 17.43.42.jpeg'
import hero2 from './images/freepik__the-style-is-candid-image-photography-with-natural__42716.png'
import hero3 from './images/newBack.jpg'
import hero4 from './images/freepik__the-style-is-candid-image-photography-with-natural__31927.jpg'
import hero5 from './images/freepik__the-style-is-candid-image-photography-with-natural__7856.jpg'
import { useNavigate } from 'react-router-dom';
import {
  Search, MapPin, Phone, Mail,
  Instagram, Facebook, Linkedin
} from 'lucide-react';
import CustomerRating from './CustomerRating';
import Contact from './Contact';
import MapContainer from './MapCont';
import NoteContext from './NoteContext';
const serviceDetails = {
  // Facial Treatments
  'Skin analysis': 'Professional evaluation of your skin type, concerns, and conditions using advanced diagnostic tools. Includes personalized skincare recommendations and treatment planning.',
  'Deep cleansing treatments': 'Thorough cleansing procedure that removes impurities, unclogs pores, and eliminates blackheads. Includes steam treatment, gentle extraction, and soothing mask.',
  'Anti Ageing': 'Comprehensive anti-aging treatment using advanced serums and techniques to reduce fine lines and wrinkles. Includes collagen-boosting therapy and LED light treatment.',
  'Skin Lightening and Pigmentation': 'Specialized treatment targeting dark spots, uneven skin tone, and hyperpigmentation. Uses safe, medical-grade products and advanced techniques.',
  'Acne and Post Acne Scans': 'Targeted treatment for active acne and acne scars. Includes deep cleansing, specialized serums, and healing therapies to improve skin texture.',
  'Aroma Facials': 'Luxurious facial treatment using essential oils and aromatherapy. Combines relaxation with skin benefits for a rejuvenating experience.',
  'Swedish Facial': 'Classic European facial technique incorporating cleansing, exfoliation, massage, and mask. Perfect for all skin types.',
  'Chemical Peels': 'Professional-grade chemical exfoliation treatment to improve skin texture, tone, and clarity. Various strengths available based on your needs.',
  'Korean Facials': 'Multi-step Korean skincare ritual focusing on achieving glass skin. Includes double cleansing, essence application, and sheet mask therapy.',
  
  // Hair Services
  'Haircuts': 'Precision cutting and styling tailored to your face shape and preferences. Includes consultation, wash, and styling.',
  'Hair Coloring': 'Professional color services using premium products. Includes consultation, strand test, and post-color treatment.',
  'Hairfall Treatments': 'Specialized scalp and hair therapy to address hair loss concerns. Includes scalp analysis and custom treatment plan.',
  'Hair Regrowth Treatments': 'Advanced treatments to stimulate hair growth using cutting-edge techniques and products. Includes regular progress monitoring.',
  'Hair Chemical Treatments': 'Professional straightening, perming, or smoothing treatments. Includes consultation and post-treatment care instructions.',
  
  // Body Wellness
  'Aroma therapy': 'Holistic treatment using essential oils to promote physical and emotional well-being. Customized oil blends for your specific needs.',
  'Body therapy': 'Comprehensive body treatment combining various techniques for overall wellness. Includes consultation and personalized therapy plan.',
  'Massage treatments': 'Various massage techniques available, from relaxation to deep tissue. Customized pressure and focus areas based on your needs.',
  'Reflexology': 'Specialized pressure point massage focusing on feet and hands. Promotes overall body wellness through targeted pressure points.',
  'Stress relief treatments': 'Combination of techniques designed to reduce stress and promote relaxation. Includes aromatherapy and gentle massage.',
  'Body scrubs': 'Full-body exfoliation treatment using premium scrubs. Includes moisturizing treatment for soft, glowing skin.',
  'Mld Massage': 'Manual Lymphatic Drainage massage to improve circulation and reduce swelling. Gentle, rhythmic technique for overall wellness.',
  
  // Beauty Enhancements
  'PMU for eyebrows': 'Semi-permanent makeup for perfectly shaped brows. Includes consultation, design, and touch-up session.',
  'PMU for eyeliner': 'Long-lasting eyeliner enhancement using semi-permanent makeup. Natural to dramatic styles available.',
  'PMU for lips': 'Semi-permanent lip color and definition enhancement. Includes color consultation and natural-looking results.',
  'Eyelash extensions': 'Custom eyelash extension application for enhanced eye appearance. Various lengths and styles available.',
  'Nail art': 'Creative nail design and artistry using premium products. Unique, personalized designs for any occasion.',
  'Acrylic and Gel Nails extensions': 'Professional nail enhancement services. Includes nail prep, application, and detailed finishing.',
  
  // Make Up
  'Bridal Make Up': 'Complete bridal makeup service using premium products. Includes trial session and day-of touch-ups.',
  'Photo Shoots': 'Camera-ready makeup application perfect for photography. Includes lighting test and touch-ups.',
  'Red Carpet Look': 'Glamorous makeup application for special events. Includes consultation and long-wearing products.',
  'Glamourous Make Up': 'Bold and dramatic makeup looks for special occasions. Includes false lashes and highlighting techniques.'
};
const serviceCategories = [
  {
    name: 'Facial Treatments',
    image: faceArt,
    services: [
      'Skin analysis',
      'Deep cleansing treatments',
      'Anti Ageing',
      'Skin Lightening and Pigmentation',
      'Acne and Post Acne Scans',
      'Aroma Facials ',
      'Swedish Facial',
      'Chemical Peels',
      'Korean Facials'
    ]
  },
  {
    name: 'Hair Services',
    image: hairService,
    services: [
      'Haircuts',
      'Hair Coloring',
      'Hairfall Treatments',
      'Hair Regrowth Treatments',
      'Hair Chemical Treatments'
    ]
  },
  {
    name: 'Body Wellness',
    image: bodyWellness,
    services: [
      'Aroma therapy',
      'Body therapy',
      'Massage treatments',
      'Reflexology',
      'Stress relief treatments',
      'Body scrubs',
      'Mld Massage'
    ]
  },
  {
    name: 'Beauty Enhancements',
    image: beauty,
    services: [
      'PMU for eyebrows',
      'PMU for eyeliner',
      'PMU for lips',
      'Eyelash extensions',
      'Nail art',
      'Acrylic and Gel Nails extenstions'
    ]
  },
  {
    name: 'Make Up',
    image: makeUpImg,
    services: [
      'Bridal Make Up',
      'Photo Shoots',
      'Red Carpet Look',
      'Glamourous Make Up',
      'Nail art',
      'Acrylic and Gel Nails extenstions'
    ]
  }, {
    name: 'Accesories Rental',
    image: bridalImg,
    services: [
      'Bridal Make Up',
      'Photo Shoots',
      'Red Carpet Look',
      'Glamourous Make Up',
      'Nail art',
      'Acrylic and Gel Nails extenstions'
    ]
  }
];

const searches = [
  "haircuts", "eyelash extensions", "nail art", "body therapy", 'services'
]
const Home = () => {
  
  const [addedServices, setAddedServices] = useState(() => {
    const savedServices = localStorage.getItem('addedServices');
    return savedServices ? JSON.parse(savedServices) : {};
  });

  useEffect(() => {
    localStorage.setItem('addedServices', JSON.stringify(addedServices));
  }, [addedServices]);
  const navigate = useNavigate();
  const{bookingsCount,setBookingsCount , setSelectedServices,handleServiceRemove } = useContext(NoteContext)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServiceDetails, setSelectedServiceDetails] = useState(()=>{
    const saved = localStorage.getItem('selectedService');
    return saved ? JSON.parse(saved) : {
      name: '',
    description: ''
    };
  });
  useEffect(() => {
      localStorage.setItem('selectedService', JSON.stringify(selectedServiceDetails));
    }, [selectedServiceDetails]);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const {servicesRef,activeCategory, setActiveCategory} = useContext(NoteContext);
  const heroRef = useRef(null);
  const [placeholderVal, setPlaceholderVal] = useState('search for services...')
  const [isImageClicked, setIsImageClicked] = useState(false)
  const searchRef = useRef(null);
  const {isHeroVisible, setIsHeroVisible} = useContext(NoteContext)
  const [isHovered, setIsHovered] = useState(false);
  const [index, setIndex] = useState(0);
  const serviceDetailsRef = useRef(null);
  const allServices = serviceCategories.reduce((acc, category) => {
    return [...acc, ...category.services];
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Add this array with your other constants
  const heroImages = [
    heroImg, // your existing hero image
    hero5,
    hero3,
    hero2,
    hero4
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  // Add these navigation functions
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };
  const handleServiceClick = (serviceName) => {
    setSelectedServiceDetails({
      name: serviceName,
      description: serviceDetails[serviceName] || 'Description coming soon...',
    });
  
    // Log to verify this part is getting called
    console.log('Service clicked:', serviceName);
  
    if (serviceDetailsRef.current) {
      console.log('Scrolling to service details section...');
      serviceDetailsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center', // Ensure it centers the section in the view
        inline: 'nearest' // Ensures the scroll doesn't go out of bounds
      });
    }
  };
  const filteredServices = searchTerm
    ? allServices.filter(service => 
        service.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
    const getCategoryForService = (serviceName) => {
      return serviceCategories.find(category =>
        category.services.some(service => 
          service.toLowerCase() === serviceName.toLowerCase()
        )
      );
    };
    const displayedCategories = searchTerm
    ? serviceCategories.filter(category =>
        category.services.some(service =>
          service.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : serviceCategories;
    const handleSearch = (selectedService) => {
      if (selectedService) {
        setSearchTerm(selectedService);
        const category = getCategoryForService(selectedService);
        setActiveCategory(category ? category.name : null);
      }
      if (servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      setShowRecommendations(false);
    };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowRecommendations(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const serviceChangeFunc = () => {
      let ind = 0;
      setInterval(() => {
        if (ind === searches.length) {
          ind = 0;
        }
        const search = searches[ind];
        ind++;
        setPlaceholderVal('search for ' + search + '...');
      }, 3000)
    }
    serviceChangeFunc();
  }, [])
  const handleAddRemoveService = (serviceName) => {
    if (addedServices[serviceName]) {
      // Remove service
      setAddedServices((prev) => {
        const newAddedServices = { ...prev };
        delete newAddedServices[serviceName];
        return newAddedServices;
      });
      setBookingsCount((prev) => prev - 1);
      setSelectedServices((prevServices) => 
        prevServices.filter(service => service !== serviceName)
      );
    } else {
      // Add service
      setAddedServices((prev) => ({
        ...prev,
        [serviceName]: true,
      }));
      setBookingsCount((prev) => prev + 1);
      setSelectedServices((prevServices) => [...prevServices, serviceName]);
    }
  };
  return (
    <div className="home-page">
       <div className="hero-section hidden" ref={heroRef}>
    {heroImages.map((img, index) => (
      <div
        key={index}
        className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
        style={{ backgroundImage: `url(${img})` }}
      />
    ))}
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>Find your <span className='main-word'>Aesthetic</span></h1>
      <p>Your sanctuary for beauty and wellness</p>
      <div className="search-wrapper" ref={searchRef}>
            <form className="search-container" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder={placeholderVal}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowRecommendations(true);
                }}
                onFocus={() => setShowRecommendations(true)}
                className="search-input"
              />
              <button
                type="button"
                className="search-button"
                onClick={() => handleSearch()}
              >
                <Search size={20} className='search-icon' />
              </button>
            </form>
            {showRecommendations && filteredServices.length > 0 && (
              <div className="search-recommendations">
                {filteredServices.map((service, index) => (
                  <div
                    key={index}
                    className="recommendation-item"
                    onClick={() => handleSearch(service)}
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button className="slide-nav prev" onClick={prevSlide}>&lt;</button>
    <button className="slide-nav next" onClick={nextSlide}>&gt;</button>
    
    <div className="slide-dots">
      {heroImages.map((_, index) => (
        <button
          key={index}
          className={`slide-dot ${currentSlide === index ? 'active' : ''}`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
      </div>
      
      <div className="services-section hidden" id="services-section">
        <h2   ref={servicesRef} onClick={() => {
          setIsImageClicked(false);
          setSearchTerm('');
          setActiveCategory(null);
          setSelectedServiceDetails({ name: '', description: '' });
        }}>Our Services</h2>
        <div className="services-container">
          <div className="services-grid">
            {displayedCategories.map((category, catIndex) => (
              (!activeCategory || activeCategory === category.name) && (
                <div key={catIndex} className="category-card">
                  {!isImageClicked || catIndex !== index ? (
                    <div
                      className="category-image"
                      style={{ backgroundImage: `url(${category.image})` }}
                      onMouseEnter={() => {
                        setIsImageClicked(true);
                        setIndex(catIndex);
                      }}
                      onMouseLeave={() => setIsImageClicked(false)}
                      onClick={() => {
                        setIsImageClicked(true);
                        setIndex(catIndex);
                      }}
                    >
                      <h3>{category.name}</h3>
                    </div>
                  ) : ''}
                  {isImageClicked && catIndex === index ? (
                    <div
                      className={`category-services ${isImageClicked ? 'show' : ''}`}
                      style={{ backgroundImage: `url(${category.image})` }}
                      onMouseLeave={() => setIsImageClicked(false)}
                    >
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex} 
                          className="service-card"
                          onClick={() => handleServiceClick(service)}
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                  ) : ''}
                </div>
              )
            ))}
          </div>
          {selectedServiceDetails.name && (
          <div className="service-details-wrapper" ref={serviceDetailsRef}>
            <div className="service-details">
              <div className="service-details-content">
                <h3>{selectedServiceDetails.name}</h3>
                <p>{selectedServiceDetails.description}</p>
                <button
                className={`book-service-btn${addedServices[selectedServiceDetails.name] ? '-remove' : ''}`}
                onClick={() => handleAddRemoveService(selectedServiceDetails.name)}
              >
                {addedServices[selectedServiceDetails.name] ? "Remove Service" : "Add Service"}
              </button>
              </div>
            </div>
          </div>
        )}
        </div>
        <CustomerRating />
        <Contact />
      </div>
    </div>);
};

export default Home;