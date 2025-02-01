import React, { useState,useRef,useEffect } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(()=>{
    return JSON.parse(localStorage.getItem('isVisible')) ||  false;
  });
  useEffect(() => {
    localStorage.setItem('isVisible', JSON.stringify(isHeroVisible));
  }, [isHeroVisible]);
  const [activeCategory, setActiveCategory] = useState(null);
  const handleNavToggle = (isOpen) => {
    setIsNavOpen(isOpen);
  };
  const productName = [
    'None','Lavender Bath Salts' , 'Aromatherapy Candles' , 'Healing Mineral Soak'
  ]
   const [addedServices, setAddedServices] = useState(() => {
      const savedServices = localStorage.getItem('addedServices');
      return savedServices ? JSON.parse(savedServices) : {};
    });
     useEffect(() => {
        localStorage.setItem('addedServices', JSON.stringify(addedServices));
      }, [addedServices]);
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
  const services = [
    'None',
    'Skin analysis',
      'Deep cleansing treatments',
      'Anti Ageing',
      'Skin Lightening and Pigmentation',
      'Acne and Post Acne Scans',
      'Aroma Facials ',
      'Swedish Facial',
      'Chemical Peels',
      'Korean Facials',
      'Haircuts',
      'Hair Coloring',
      'Hairfall Treatments',
      'Hair Regrowth Treatments',
      'Hair Chemical Treatments',
      'Aroma therapy',
      'Body therapy',
      'Massage treatments',
      'Reflexology',
      'Stress relief treatments',
      'Body scrubs',
      'Mld Massage',
      'PMU for eyebrows',
      'PMU for eyeliner',
      'PMU for lips',
      'Eyelash extensions',
      'Nail art',
      'Acrylic and Gel Nails extenstions',
      'Bridal Make Up',
      'Photo Shoots',
      'Red Carpet Look',
      'Glamourous Make Up',
      'Nail art',
      'Bridal Jewellery',
      'Hair Extensions Long/Short',
      'Hair Accesories'
  ];
  const [addedProducts, setAddedProducts] = useState(() => {
      const savedProducts = localStorage.getItem('addedProducts');
      return savedProducts ? JSON.parse(savedProducts) : {};
    });
  useEffect(() => {
      localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
    }, [addedProducts]);
  const [selectedHand, setSelectedHand] = useState(() => {
    const saved = localStorage.getItem('selectedHand');
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedServices, setSelectedServices] = useState(() => {
    const saved = localStorage.getItem('selectedServices');
    return saved ? JSON.parse(saved) : [];
  });
  const [bookingsCount, setBookingsCount] = useState(() => {
    const saved = localStorage.getItem('bookingsCount');
    return saved ? parseInt(saved) : 0;
  });
  const servicesRef = useRef(null);
  const handleHandAdd = (e) => {
    // Get the selected options from the event
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);

    // If "None" is selected, clear the selectedHand array and return early
    if (selectedOptions.includes('None')) {
      setBookingsCount((prev)=>prev-selectedHand.length); 
        setSelectedHand([]);
        setAddedProducts({}); // Optionally reset addedProducts if needed
        return;
    }

    // Filter out hands that are already in the selectedHand array
    const newHands = selectedOptions.filter((hand) => !selectedHand.includes(hand));

    // If there are new hands to add
    if (newHands.length > 0) {
        // Update the addedProducts state
        setAddedProducts((prev) => {
            const updatedAddedProducts = { ...prev };
            newHands.forEach(hand => {
                updatedAddedProducts[hand] = true; // Assuming the key is the hand name
            });
            return updatedAddedProducts;
        });

        // Update the selectedHand state
        setSelectedHand((prev) => [...prev, ...newHands]);

        // Update the bookings count
        setBookingsCount((prev) => prev + newHands.length);
    }
};

  const handleHandRemove = (index) => {
    const productName = selectedHand[index];
    if (addedProducts[productName]) {
      // Remove product
      setAddedProducts((prev) => {
        const newAddedProducts = { ...prev };
        delete newAddedProducts[productName];
        return newAddedProducts;
      });
      setSelectedHand((prev) => prev.filter(item => item !== productName));
      setBookingsCount((prev) => prev - 1);
    }
    setSelectedHand((prev) => {
      const newHandList = [...prev]; 
      newHandList.splice(index, 1);  
      return newHandList; 
    });
  };
  const handleServiceAdd = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    if (selectedOptions.includes('None')) {
      setBookingsCount((prev)=>prev-selectedServices.length); 
      setAddedServices({}); 
      setSelectedServices([]); 
      return; // Exit early
  }

    const newServices = selectedOptions.filter((service) => !selectedServices.includes(service));

    if (newServices.length > 0) {
        // Update the addedServices state
        setAddedServices((prev) => {
            const updatedAddedServices = { ...prev };
            newServices.forEach(service => {
                updatedAddedServices[service] = true;
            });
            return updatedAddedServices;
        });

        // Update the selectedServices state
        setSelectedServices((prevServices) => [...prevServices, ...newServices]);

        // Update the bookings count
        setBookingsCount((prev) => prev + newServices.length);
    }
};
  const handleServiceRemove = (index) => {
    const serviceName = services[index] ; 
    if (addedServices[serviceName]) {
      setAddedServices((prev) => {
        const newAddedServices = { ...prev };
        delete newAddedServices[serviceName];
        return newAddedServices;
      });
      setSelectedServices((prevServices) => 
        prevServices.filter(service => service !== serviceName)
      );
    }
    setSelectedServices(selectedServices.filter((_, i) => i !== index));
    setBookingsCount((prev)=>{
      return prev > 0 ? prev-1 : 0 });
  };
  useEffect(() => {
    localStorage.setItem('selectedHand', JSON.stringify(selectedHand));
  }, [selectedHand]);

  useEffect(() => {
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
  }, [selectedServices]);

  useEffect(() => {
    localStorage.setItem('bookingsCount', bookingsCount.toString());
  }, [bookingsCount]);

  return (
    <NoteContext.Provider value={{ isNavOpen,isHeroVisible,setIsHeroVisible, handleNavToggle,servicesRef , activeCategory,setActiveCategory , selectedServices, setSelectedServices,handleServiceAdd,handleServiceRemove,services , bookingsCount,setBookingsCount , productName , selectedHand,setSelectedHand , handleHandAdd  , handleHandRemove ,addedServices, setAddedServices , selectedServiceDetails, setSelectedServiceDetails , addedProducts, setAddedProducts} }>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;