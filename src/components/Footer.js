// src/components/Footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content-column footer__content-column--social-media">
            <h2>Social media</h2>
            <p className="footer__social-text">Follow us on social media:</p>
            <ul>
              <li>
                <a href="#" title="Visit our facebook">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Visit our instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Visit our youtube">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Visit our tiktok">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Visit our linkedin">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>

            <span className="accent-border"></span>

            <address className="footer__address">
              <p>Halden University</p>
              <p>University Way</p>
              <p>Halden, HA1 6BD</p>
              <p>United Kingdom</p>
            </address>
            <p className="footer__tel">
              Contact us: <a href="tel:0000000">+4420 0000 0000</a>
            </p>
          </div>
          <div className="footer__content-column">
            <h2>Explore Halden</h2>
            <ul>
              <li>
                <a href="#">About Halden</a>
              </li>
              <li>
                <a href="#">Take a virtual tour</a>
              </li>
              <li>
                <a href="#">Accreditations</a>
              </li>
              <li>
                <a href="#">Find us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer__content-column">
            <h2>The University</h2>
            <ul>
              <li>
                <a href="#">Undergraduate</a>
              </li>
              <li>
                <a href="#">Postgraduate</a>
              </li>
              <li>
                <a href="#">News and events</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
            </ul>
          </div>
          <div className="footer__content-column footer__content-column--copyright">
            <ul>
              <li>
                <a href="#">Data protenction</a>
              </li>
              <li>
                <a href="#">Cookie settings</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
            <p className="footer__copyright-text">Copyright @2025 Halden University</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
