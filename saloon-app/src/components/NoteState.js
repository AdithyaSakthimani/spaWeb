import React, { useState,useRef,useEffect } from 'react';
import NoteContext from './NoteContext';
const NoteState = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const handleNavToggle = (isOpen) => {
    setIsNavOpen(isOpen);
  };
  const productName = [
    'None','Lavender Bath Salts' , 'Aromatherapy Candles' , 'Healing Mineral Soak'
  ]

  const services = [
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
      'Acrylic and Gel Nails extenstions',
      'Bridal Make Up',
      'Photo Shoots',
      'Red Carpet Look',
      'Glamourous Make Up',
      'Nail art',
      'Acrylic and Gel Nails extenstions'
  ];
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
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    if(selectedOptions.includes('None')){
      setSelectedHand([]) ; 
    }
    else {
  
    const newHands = selectedOptions.filter((hand) => !selectedHand.includes(hand));
  
    if (newHands.length > 0) {
      setSelectedHand((prev) => [...prev, ...newHands]); 
    }}
  };

  const handleHandRemove = (index) => {
    setSelectedHand((prev) => {
      const newHandList = [...prev]; 
      newHandList.splice(index, 1);  
      return newHandList; 
    });
  };
  const handleServiceAdd = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    
    const newServices = selectedOptions.filter((service) => !selectedServices.includes(service));
  
    if (newServices.length > 0) {
      setSelectedServices([...selectedServices, ...newServices]);
    }
  };

  const handleServiceRemove = (index) => {
    setSelectedServices(selectedServices.filter((_, i) => i !== index));
    setBookingsCount((prev)=>{
      return bookingsCount > 0 ? bookingsCount-1 : 0 });
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
    <NoteContext.Provider value={{ isNavOpen,isHeroVisible,setIsHeroVisible, handleNavToggle,servicesRef , activeCategory,setActiveCategory , selectedServices, setSelectedServices,handleServiceAdd,handleServiceRemove,services , bookingsCount,setBookingsCount , productName , selectedHand,setSelectedHand , handleHandAdd  , handleHandRemove}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;