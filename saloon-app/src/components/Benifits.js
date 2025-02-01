import React from 'react';
import './benefits.css';
import holi from './images/newHoli.jpg'
import pure from './images/pure.jpg'
import scientist from './images/newscientist.jpg'
const BenefitsPage = () => {
  const benefits = [
    {
      image: holi,
      title: 'Holistic Wellness',
      description: 'Our products are designed to nurture your physical and emotional well-being through carefully selected natural ingredients.',
      details: [
        'Promotes mental and physical balance',
        'Supports stress reduction and relaxation',
        'Enhances overall emotional resilience'
      ]
    },
    {
      image: pure,
      title: 'Pure Natural Ingredients',
      description: 'We source only the highest quality, organic, and ethically obtained ingredients to ensure maximum therapeutic potential.',
      details: [
        '100% organic sourcing',
        'Cruelty-free production',
        'Minimal environmental impact'
      ]
    },
    {
      image: scientist,
      title: 'Scientifically Formulated',
      description: 'Each product is crafted with input from aromatherapists and wellness experts to deliver targeted, effective solutions.',
      details: [
        'Researched-backed formulations',
        'Personalized wellness approaches',
        'Continuous product innovation'
      ]
    }
  ];

  return (
    <div className="benefits-container">
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>

      <div className="benefits-header">
        <h1 className="benefits-header-title">Why Healing Hands?</h1>
        <p className="benefits-header-description">
          Transformative wellness that goes beyond traditional self-care
        </p>
      </div>

      <div className="benefits-sections">
        {benefits.map((benefit, index) => (
          <section 
            key={index} 
            className="benefit-section"
          >
            <img 
              src={benefit.image} 
              alt={benefit.title} 
              className="benefit-image" 
            />
            <div className="benefit-content">
              <h2 className="benefit-title">{benefit.title}</h2>
              <p className="benefit-description">{benefit.description}</p>
              <ul className="benefit-details">
                {benefit.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;