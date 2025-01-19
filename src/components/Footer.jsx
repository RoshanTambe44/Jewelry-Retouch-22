import React, { useState } from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setError("Email is required.");
    } else if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError(""); // Clear error if email is valid
      // Handle successful form submission logic here (e.g., API call)
      alert("Subscribed successfully!");
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>D 247/1, Sector 63</p>
          <p>Noida, India 201301</p>
          <p>Contact: 0120-4330800</p>
          <p>Email: info@shotwebservices.com</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>
            Stay updated! Subscribe to our newsletter to get the latest news
            about our products and services delivered right to your inbox!
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">➤</button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Social</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
