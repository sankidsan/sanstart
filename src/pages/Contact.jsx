import React from 'react';
import '../index.css';


const Contact = () => {
  return (
    <div className="about-us">
      <header className="company-story">
        <h1>Contact Us</h1>
      </header>
      <div className="contact-us">

<div className="contact-info">
  <h3>Contact Information</h3>
  <p>Email: contact@bbzcrew.com</p>
  <p>Phone: 6383091451</p>
  <p>Address: 123 Street, Ramanathapuram, Tamilnadu, India.</p>
</div>
<div className="contact-form">
  <h3>Contact Form</h3>
  <form>
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4"></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
</div>
</div>
      
    </div>
  );
};


export default Contact;
