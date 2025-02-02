import React, { useState, useContext } from "react";
import "./BookingPage.css";
import { Calendar, Clock, Phone, Mail, User, MessageSquare, ClipboardPen, Heart } from "lucide-react";
import NoteContext from "./NoteContext";

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: ""
  });

  const WHATSAPP_NUMBER = "+919866100630";

  const formatWhatsAppMessage = (data, selectedServices, selectedHand) => {
    const message = `
*New Booking Request*
------------------
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Date:* ${data.date}
*Time:* ${data.time}

*Selected Services:*
${selectedServices.map(service => `- ${service}`).join('\n')}

*Selected Products:*
${selectedHand.map(product => `- ${product}`).join('\n')}

${data.message ? `*Special Requests:*\n${data.message}` : ''}
    `.trim();

    return encodeURIComponent(message);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { selectedHand, productName, handleHandAdd, handleHandRemove } = useContext(NoteContext);
  const { selectedServices, handleServiceAdd, handleServiceRemove, services } = useContext(NoteContext);

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message
    const whatsappMessage = formatWhatsAppMessage(formData, selectedServices, selectedHand);

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Log the form data
    console.log("Form submitted:", {
      ...formData,
      services: selectedServices,
      products: selectedHand
    });

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="booking-page">
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1 className="page-title">Select Your Services To Book</h1>

            {/* Services Section */}
            <div className="form-group-service">
              <label>
                <ClipboardPen className="icon" />
                Add Spa Services
              </label>
              <div className="select-container">
                <select onChange={handleServiceAdd} defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service} disabled={selectedServices.includes(service)}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedServices.length > 0 && (
              <div className="form-group">
                <h3>Selected Spa Services</h3>
                <div className="selected-services">
                  {selectedServices.map((service, ind) => (
                    <div key={ind} className="service-item">
                      <div>
                        <p className="service-duration">Service: {service}</p>
                      </div>
                      <div className="service-actions">
                        <button
                          onClick={() => handleServiceRemove(ind)}
                          type="button"
                          className="remove-button"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Healing Hand Products Section */}
            <div className="form-group-service">
              <label>
                <Heart className="icon" />
                Custom Made Healing Hand Product
              </label>
              <div className="select-container">
                <select onChange={handleHandAdd} defaultValue="">
                  <option value="" disabled>Select a product</option>
                  {productName.map((product, index) => (
                    <option key={index} value={product} disabled={selectedHand.includes(product)}>
                      {product}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedHand.length > 0 && (
              <div className="form-group">
                <h3>Selected Products</h3>
                <div className="selected-services">
                  {selectedHand.map((product, ind) => (
                    <div key={ind} className="service-item">
                      <div>
                        <p className="service-duration">Product: {product}</p>
                      </div>
                      <div className="service-actions">
                        <button
                          onClick={() => handleHandRemove(ind)}
                          type="button"
                          className="remove-button"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Date and Time Section */}
            <div className="form-row">
              <div className="form-group-date">
                <label><Calendar className="icon" /> Select Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="my-date-input"
                />
              </div>

              <div className="form-group-time">
                <label><Clock className="icon" /> Select Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="time-input"
                >
                  <option value="">Choose a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Name, Email, and Phone Section */}
            <div className="form-group-name">
              <label><User className="icon" /> Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="date-input"
              />
            </div>

            <div className="form-group-email">
              <label><Mail className="icon" /> Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="date-input"
              />
            </div>

            <div className="form-group-phone">
              <label><Phone className="icon" /> Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="date-input"
              />
            </div>

            {/* Special Requests Section */}
            <div className="form-group">
              <label><MessageSquare className="icon" /> Special Requests</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="date-input"
              ></textarea>
            </div>

            {/* Note about WhatsApp Redirection */}
            <p className="whatsapp-note">
              Note: On submitting, you will be redirected to Milli's WhatsApp to confirm your booking.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={
                !(
                  (selectedServices.length !== 0 || selectedHand.length !== 0) &&
                  formData.phone !== '' &&
                  formData.email !== '' &&
                  formData.name !== '' &&
                  formData.time &&
                  formData.date
                )
              }
              className="submit-button"
            >
              {selectedServices.length === 0 ? "Please Select Services" : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;