import React from "react";
import { 
  Star, 
  Briefcase, 
  Scissors, 
  Award 
} from "lucide-react";
import "./Timeline.css";

const Timeline = () => {
  const experiences = [
    {
      title: "Senior Beauty Aesthetics Professional",
      company: "Mili Aesthetic Spa & Bridal Studio",
      type: "Founder",
      duration: "Jan 2021 – Present",
      location: "Bangalore, Karnataka",
      details: "Established specialized beauty and bridal services studio.",
      skills: ["Business Management", "Bridal Makeup", "Aesthetic Treatments"],
      icon: Star
    },
    {
      title: "Professional Beauty Consultant",
      company: "Freelance Services",
      type: "Independent Contractor",
      duration: "Mar 2011 – Jan 2021",
      location: "Bengaluru, Karnataka",
      details: "Developed comprehensive freelance beauty service portfolio.",
      skills: ["Bridal Makeup", "Skincare", "Personal Styling"],
      icon: Briefcase
    },
    {
      title: "Beauty Consultant",
      company: "Ganjam Jewellers",
      type: "Consultant",
      duration: "2010 – 2014",
      location: "Bengaluru, Karnataka",
      details: "Provided specialized beauty consultation for premium clientele.",
      skills: ["Client Consultation", "Beauty Presentation"],
      icon: Scissors
    },
    {
      title: "Hair & Beauty Specialist",
      company: "Industry Experience",
      type: "Various Roles",
      duration: "2003 – 2010",
      location: "India & Dubai",
      details: "Developed comprehensive expertise in beauty and styling.",
      skills: ["Hair Styling", "Salon Management", "Professional Training"],
      icon: Award
    }
  ];

  return (
    <section className="timeline-section">
      <h1 className="timeline-title">Professional Journey</h1>
      <div className="timeline-container vertical-timeline">
        {experiences.map((exp, index) => {
          const TimelineIcon = exp.icon;
          return (
            <div 
              key={index} 
              className={`timeline-item vertical-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-icon">
                <TimelineIcon color="#ffff" size={20} strokeWidth={2} />
              </div>
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <p className="company">{exp.company}</p>
                <p className="details">
                  <strong>{exp.type} · </strong>
                  {exp.duration}
                </p>
                <p className="location">{exp.location}</p>
                {exp.details && <p className="description">{exp.details}</p>}
                {exp.skills && (
                  <ul className="skills">
                    {exp.skills.map((skill, idx) => (
                      <li key={idx}>{skill}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;