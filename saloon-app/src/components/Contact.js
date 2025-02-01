import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import './Contact.css';
import MapCont from './MapCont';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "e7321d39-0e7f-4554-ab89-66ab0a9402b4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('success');
      } else {
        console.log("Error", data);
        setResult(data.message);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Failed to send message. Please try again.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <>
      <h1 className="section-title">Connect With Me</h1>
      <div className="container">
        <div className="wrapper">
          <div className='head-div'>
            <span className='mail-icon'>
              <Mail size={40} />
            </span>
            <h1 className="title">Contact Me</h1>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="textarea"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                <div className="spinner" />
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>
            {submitStatus && (
              <div className={`status ${submitStatus}`}>
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </div>
            )}
          </form>
        </div>

        <MapCont />
      </div>
    </>
  );
};

export default ContactPage;