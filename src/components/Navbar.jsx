 import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="main-nav">
      <div className="nav-content">
        <div className="logo">
          <Link to="/">
            <div className="logo-text">Diagonsy</div>
            <div className="logo-subtitle">Hospital Service</div>
          </Link>
        </div>
        <nav className="nav-center">
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="nav-right">
           <Link to="/book" className="book-btn">Book an Appointment</Link>

        </div>
      </div>
      <style>{`
        .main-nav {
          background: linear-gradient(135deg, #3b5998 0%, #4a6fa5 50%, #5b8db8 100%);
          padding: 12px 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        .logo a {
          text-decoration: none;
          display: block;
        }
        
        .logo-text {
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          line-height: 1;
          margin-bottom: 2px;
        }
        
        .logo-subtitle {
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.5px;
        }
        
        .nav-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 40px;
        }
        
        .nav-links li {
          margin: 0;
        }
        
        .nav-links a {
          color: white;
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 8px 0;
          position: relative;
        }
        
        .nav-links a:hover,
        .nav-links a.active {
          color: rgba(255, 255, 255, 1);
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }
        
        .nav-right {
          display: flex;
          align-items: center;
        }
        
        .book-btn {
          background-color: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 10px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          border: 2px solid #00ffff;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
        }
        
        .book-btn:hover {
          background-color: #fff;
          transform: translateY(-2px);
          border-color: #00ffff;
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
        }
        
        @media (max-width: 968px) {
          .nav-content {
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .logo {
            flex: 1;
          }
          
          .nav-center {
            order: 3;
            flex-basis: 100%;
            justify-content: center;
            margin-top: 10px;
          }
          
          .nav-links {
            gap: 25px;
          }
        }
        
        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.6rem;
          }
          
          .logo-subtitle {
            font-size: 0.75rem;
          }
          
          .nav-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .book-btn {
            padding: 10px 20px;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          .main-nav {
            padding: 15px 0;
          }
          
          .nav-content {
            flex-direction: column;
            text-align: center;
          }
          
          .nav-right {
            width: 100%;
            justify-content: center;
          }
          
          .book-btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </header>
  );
}