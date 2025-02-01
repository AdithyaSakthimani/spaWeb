import React, { useState } from "react";
import "./BookingPage.css";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });

  const services = [
    {
      id: 1,
      name: "Bridal Makeup",
      duration: "3 hours",
      price: "₹15,000"
    },
    {
      id: 2,
      name: "Party Makeup",
      duration: "1.5 hours",
      price: "₹5,000"
    },
    {
      id: 3,
      name: "Skincare Treatment",
      duration: "1 hour",
      price: "₹3,500"
    },
    {
      id: 4,
      name: "Hair Styling",
      duration: "1 hour",
      price: "₹2,500"
    }
  ];

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM"
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="booking-container">
      <div className="booking-wrapper">
        <h1 className="booking-title">Book an Appointment</h1>
        
        <div className="booking-form-container">
          <form onSubmit={handleSubmit}>
            <div className="services-grid">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`service-card ${
                    formData.service === service.name ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    value={service.name}
                    checked={formData.service === service.name}
                    onChange={handleChange}
                  />
                  <div className="service-name">{service.name}</div>
                  <div className="service-duration">Duration: {service.duration}</div>
                  <div className="service-price">{service.price}</div>
                </label>
              ))}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Select Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="">Choose a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Special Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;