// Footer.jsx
import React from "react";
import footer from "../assets/footer.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            SNB Web Services Pvt. Ltd. an IT Enabled Service Provider (ITeS),
            where our expertise to elevate your business across multiple
            domains. Our integrated suite of services encompasses B2B Data
            Solutions, Web Design & Development, UI/UX Design, Photo Retouching,
            Staffing & Consulting, and the option to Hire Dedicated Remote
            Resources.
          </p>
          <img
            src= {footer}
            alt="SNB Web Services Logo"
            className="footer-logo"
          />
          <p>
            <strong>SNB WEB SERVICES PVT. LTD.</strong>
            <br />
            Think Big, Think Us!
          </p>
        </div>

        <div className="footer-section">
          <h4>Contact info</h4>
          <p>D 247/1, Sector 63 Noida, India 201301</p>
          <p>Contact: 0120-4558100</p>
          <p>Email: info@snbwebservices.com</p>
        </div>

        <div className="footer-section">
          <h4>Important links</h4>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Solutions</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>
            Stay updated! Subscribe to our newsletter to get the latest news
            about our products and services delivered right to your inbox!
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                alt="Email"
                style={{ width: "30px", height: "30px" }}
              />
            </a>

            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 SNB Web Services Pvt. Ltd., CIN .:
          U72900UP2017PTC097495. All rights reserved
        </p>
        <p>Privacy Policy CCPA - Privacy Policy GDPR - Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
