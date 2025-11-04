import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-logo"><Link to="/">Diagonsy</Link></h2>
          <p>Diagnosy always try to provide the most common of get the proper are for cure Healthcare Treatment.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link to="/services">Services</Link></li>
            <li><a href="#doctors">Doctors</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <span><img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4d1923b2b7647f0b9ec98_facebook.svg" alt="Facebook" className="inline-icon" /></span>
            <span><img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4d1b8ce5aa2c69ae7f320_twitter.svg" alt="Twitter" className="inline-icon" /></span>
            <span><img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4d1c29bcbb4d315952d2a_linkedin.svg" alt="LinkedIn" className="inline-icon" /></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Diagonsy. All rights reserved.
      </div>

      <style>{`
        .footer {
          background-color: #3b5998;
          color: #a9b3d5;
          padding: 80px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          color: var(--white);
          font-size: 2rem;
        }

        .footer-logo a {
          color: var(--white);
        }

        .footer-col h4 {
          color: var(--white);
          margin-bottom: 1.5rem;
        }

        .footer-col ul li {
          margin-bottom: 0.8rem;
        }

        .footer-col ul a {
          color: #a9b3d5;
          transition: color 0.3s ease;
        }

        .footer-col ul a:hover {
          color: var(--white);
        }

        .footer-social span {
          margin-right: 10px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .footer-social span:hover {
          opacity: 0.7;
        }

        .footer-bottom {
          text-align: center;
          border-top: 1px solid #3a4468;
          padding-top: 30px;
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer { text-align: center; }
        }
      `}</style>
    </footer>
  );
}
