import React, { useState } from "react";
import "../styles/Footer.css";
import {
  FaLinkedin,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Handle email submission
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
      alert("Subscribed successfully!");
      setEmail(""); // Clear the email input field after success
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="footer"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        {/* Social Links */}
        <motion.div
          className="footer-section"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Follow Us For More</h3>
          <p>Connect with us on our social media platforms.</p>
          <motion.div
            className="social-icons"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" title="LinkedIn" />
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogle className="social-icon" title="Google" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" title="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" title="Instagram" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" title="Twitter" />
            </a>
          </motion.div>
        </motion.div>

        {/* Vertical Line */}
        <div className="footer-line"></div>
        {/* Newsletter */}
        <motion.div
          className="footer-section subscribe"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Subscribe to Our Newsletter</h3>
          <p>
            Stay updated with our latest offers, news, and product releases.
            Subscribe now and never miss out!
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
