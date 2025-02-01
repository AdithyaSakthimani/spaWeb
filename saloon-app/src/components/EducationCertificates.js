import React from "react";
import { 
  GraduationCap, 
  Award, 
  Brush, 
  Scissors, 
  Droplet, 
  Leaf 
} from "lucide-react";
import './Education.css';
import edu1 from './images/CIDESCO-2021-Logo-400.png'
import edu2 from './images/images.jpg'
import edu3 from './images/marvie-ann-beck-salon-academy_15_11313.jpeg'
import edu4 from './images/logo.png'
import edu5 from './images/BIBST-300-276-185x170.png'
const EducationCertificates = () => {
  const certificates = [
    {
      year: 2023,
      institution: "CIDESCO",
      location: "Zurich, Switzerland",
      title: "Sanitation and Sterilization",
      subtitle: "Salon/Beauty Salon Management",
      icon: Award,
      image: edu1
    },
    {
      year: 2023,
      institution: "La Nina Academy",
      title: "Makeup, BB & CC Glow",
      subtitle: "Cosmetics Hair Styling  & Design",
      icon: Brush,
      image: edu2
    },
    {
      year: 2015,
      institution: "Marvie Ann Beck Academy",
      title: "Professional Makeup",
      subtitle: "Basic & Advanced Courses",
      icon: Droplet,
      image: edu3
    },
    {
      year: 2014,
      institution: "CIBTAC",
      location: "United Kingdom",
      title: "Facial Treatments",
      subtitle: "Aesthetician & Skincare Specialist",
      icon: GraduationCap,
      image: edu4
    },
    {
      year: 2013,
      institution: "CIDESCO",
      location: "Zurich, Switzerland",
      title: "Beauty Aesthetics",
      subtitle: "Aesthetician & Skincare Specialist",
      icon: Award,
      image: edu1
    },
    {
      year: 2004,
      institution: "Institute of Butic",
      title: "Comprehensive Beauty Diplomas",
      subtitle: "Hairstyling, Body Therapy, Aesthetics, Aromatherapy",
      icon: Leaf,
      image: edu5
    }
  ];

  return (
    <section className="certificates-section">
      <h1 className="certificates-title">Education and Professional Certifications</h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => {
          const CertIcon = cert.icon;
          return (
            <div key={index} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-header">
                <CertIcon size={24} color="#0070f3" strokeWidth={2} />
                <span className="certificate-year">{cert.year}</span>
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p className="certificate-subtitle">{cert.subtitle}</p>
                <p className="certificate-institution">
                  {cert.institution} 
                  {cert.location && ` · ${cert.location}`}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EducationCertificates;