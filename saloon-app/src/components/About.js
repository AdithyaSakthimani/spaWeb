import React from "react";
import "./About.css";
import myPhoto  from './images/WhatsApp Image 2025-01-27 at 21.09.52.jpeg'
import Timeline from "./Timeline";
import EducationCertificates from "./EducationCertificates";
const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <div className="about-me-image">
          <img
            src={myPhoto}
            alt="Mili Kotian"
          />
        </div>
        <div className="about-me-content">
          <h1>Mili Kotian</h1>
          <p className="quote">
            "Every person who comes to me is treated like a Diva and made to feel like one."
          </p>
          <p className="intro">
          I am a certified beauty aesthetician with a passion for delivering top-notch skincare and bridal services. My career began in 1997, and since then, I have had the privilege of working with prestigious salons across India and the Middle East. My qualifications include a Post Graduation in Beauty Aesthetics and various diplomas in advanced beauty and therapeutic treatments.
          </p>
          <p className="services-title">Specialized Services:</p>
          <ul className="services-list">
            <li>Bridal Makeup (Classical, Fairy Tale, Celebrity)</li>
            <li>Airbrush Makeup</li>
            <li>Spa Therapies (Stone Therapy, Aroma Therapy, Swedish Massage)</li>
          </ul>
          <p className="closing">
          With years of experience and a loyal clientele, I ensure that every service I provide is delivered with care and expertise. Visit my studio and experience unparalleled beauty and wellness treatments tailored just for you.

          </p>
        </div>
      </div>
      <h1 className="section-quote">Before you visit a parlour next time THINK whether the person working on your skin is qualified enough and what they are doing is the BEST for you. </h1>
      <Timeline/>
      <EducationCertificates/>
    </section>
  );
};

export default AboutMe;
