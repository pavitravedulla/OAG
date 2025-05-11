import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Feel free to reach out using any of the methods below.</p>

      <div className="contact-info">
        <div className="contact-item">
          <strong>📧 Email:</strong>
          <span>support@onlineartgallery.com</span>
        </div>
        <div className="contact-item">
          <strong>📞 Phone:</strong>
          <span>6309533962</span>
        </div>
        <div className="contact-item">
          <strong>📍 Address:</strong>
          <span>konark Art Street, haram City, Artland 533255</span>
        </div>
      </div>

      <p>
        You can also use our contact form to send us a message directly through the website.
        We’ll get back to you as soon as possible — usually within 24 hours!
      </p>
    </div>
  );
};

export default Contact;
