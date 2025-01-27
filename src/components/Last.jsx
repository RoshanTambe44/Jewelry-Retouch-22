import React from "react";
import "../styles/Last.css";

const Last = () => {
  return (
    <footer className="last-footer">
      <div className="footer-containers">
        <div className="footer-text">
          <p>
            &copy; 2025 SNB Web Services Pvt. Ltd. | CIN: U72900UP2017PTC097495. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://snbwebservices.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="https://snbwebservices.com/ccpa-privacy-policy/" target="_blank" rel="noopener noreferrer">
            CCPA Privacy Policy
          </a>
          <a href="https://snbwebservices.com/gdpr-privacy-policy/" target="_blank" rel="noopener noreferrer">
            GDPR Privacy Policy
          </a>
        </div>
        <div className="footer-credits">
          <p>
            Designed and Developed by{" "}
            <a href="https://www.houseofmarktech.com/home" target="_blank" rel="noopener noreferrer">
              House Of Marktech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Last;
