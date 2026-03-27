import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries and support</p>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Have questions about our projects or want to get involved? We'd love to hear from you.
          </p>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>📍 Office Address</strong>
            <p>Ministry of Lands, Housing and Urban Development<br />
            Nairobi, Kenya</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>📧 Email</strong>
            <p>info@kenyasettlements.go.ke</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>📞 Phone</strong>
            <p>+254 20 123 4567</p>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong>🕒 Office Hours</strong>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send us a Message</h2>
          {submitted && (
            <div style={{ 
              background: '#d4edda', 
              color: '#155724', 
              padding: '1rem', 
              borderRadius: '5px', 
              marginBottom: '1rem' 
            }}>
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;