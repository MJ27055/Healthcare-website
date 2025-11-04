import React, { useState, useEffect } from 'react';
// Using simple unicode characters for icons instead of lucide-react dependency

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ visible: false, message: '', type: '' });

  useEffect(() => {
    // Component visibility for fade-in effect
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const faqs = [
    { question: "Why choose our medical for your family?", answer: "Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can check-up body very small period of time and we send you report online." },
    { question: "How to get Appointment for Emergency?", answer: "Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can check-up body very small period of time and we send you report online." },
    { question: "Is Lab instrument are latest and modern?", answer: "Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can check-up body very small period of time and we send you report online." },
     { question: "Do you have full body check-up Package?", answer: "Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can check-up body very small period of time and we send you report online." },
    { question: "Is there any arrangement for Vaccination?", answer: "Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can check-up body very small period of time and we send you report online." },
    { question: "Do you have full body check-up Package?", answer: "Diagnosy always try to provide the most common of get the prope for cure Healthcare are most popular package. You can check-up body very small period of time and we send you report online." }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage({
      visible: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      type: 'success'
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatusMessage({ visible: false, message: '', type: '' }), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Utility component for contact info
  const ContactItem = ({ title, lines, icon }) => (
    <div className="contact-item">
      <span className="contact-item-icon">{icon}</span>
      <div>
        <h3 className="contact-item-title">{title}</h3>
        <p className="contact-item-lines">
          {(lines || []).map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );

  const cssStyles = `
    /* Global Styles */
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      background-color: #f8f9fa;
    }

    /* Layout and Containers */
    .contact-page-container {
      min-height: 100vh;
      color: #333;
    }
    .max-width-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .py-section {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    /* --- ANIMATION STYLES (NO TAILWIND) --- */

    /* Generic Section Fade-In */
    .section-fade-in {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    }
    .section-fade-in.is-visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Hero Content Fade-In (Dedicated for smoother banner entrance) */
    .hero-fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s; 
    }
    .hero-fade-in.hero-is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Keyframe for floating background movement */
    @keyframes floatAnimation {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(50px, -50px) scale(1.05); }
        100% { transform: translate(-50px, 50px) scale(1); }
    }

    /* Status Message Toast */
    @keyframes pulse-once {
      0% { transform: scale(0.95); opacity: 0; }
      50% { transform: scale(1); opacity: 1; }
      100% { transform: scale(1); opacity: 1; }
    }
    .status-toast {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 50;
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      color: #155724;
      padding: 15px 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      transition: all 0.3s ease-in-out;
      animation: pulse-once 0.3s ease-out forwards;
    }
    .status-icon {
      font-size: 1.2rem;
      margin-right: 10px;
    }

    /* Hero Section - Banner Style */
    .hero-section {
      background: linear-gradient(145deg, #f0f8ff, #e6e6fa);
      padding: 100px 20px;
      overflow: hidden;
      text-align: center;
      position: relative;
    }
    
    /* Animated Background Shapes */
    .hero-section::before {
      content: '';
      position: absolute;
      top: -100px;
      left: -100px;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, #0d6efd 0%, rgba(240, 248, 255, 0) 70%);
      opacity: 0.1;
      border-radius: 50%;
      animation: floatAnimation 15s infinite ease-in-out alternate;
      z-index: 0; /* Keep behind content */
    }
    .hero-section::after {
      content: '';
      position: absolute;
      bottom: -150px;
      right: -150px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, #e6e6fa 0%, rgba(240, 248, 255, 0) 70%);
      opacity: 0.4;
      border-radius: 50%;
      animation: floatAnimation 20s infinite ease-in-out reverse;
      z-index: 0; /* Keep behind content */
    }
    
    .hero-content {
      position: relative;
      z-index: 1; /* Ensure text is above animated shapes */
      text-align: center; /* Ensure horizontal centering */
    }
    .hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 15px;
    }
    .hero-content p {
      font-size: 1.1rem;
      color: #475569;
      max-width: 800px;
      margin: 0 auto;
    }

    /* Contact & Form Section */
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 60px;
    }
    @media (min-width: 1024px) {
      .contact-grid {
        grid-template-columns: 1fr 1fr;
        gap: 80px;
      }
    }
    .contact-info-block h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 15px;
    }
    .contact-info-block p {
      color: #475569;
      margin-bottom: 30px;
    }

    /* Contact Items (MINIMIZED STYLES) */
    .contact-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px; /* Further reduced vertical space */
    }
    .contact-item-icon {
      font-size: 1.5rem; /* Further reduced icon size */
      color: #0d6efd;
      margin-right: 15px;
      line-height: 1;
    }
    .contact-item-title {
      font-size: 1.1rem; /* Further reduced title size */
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 2px; /* Further reduced space between title and lines */
    }
    .contact-item-lines {
      color: #475569;
      line-height: 1.6;
    }

    /* Form Styles */
    .contact-form-block h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 15px;
    }
    .contact-form-block p {
      color: #475569;
      margin-bottom: 30px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-input, .form-textarea {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      font-size: 1rem;
      color: #1e293b;
      transition: border-color 0.3s, box-shadow 0.3s;
      box-sizing: border-box;
      font-family: inherit;
    }
    .form-input:focus, .form-textarea:focus {
      border-color: #0d6efd;
      outline: none;
      box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
    }
    .form-textarea {
      resize: vertical;
    }
    .form-button {
      background-color: #0d6efd;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
      box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
    }
    .form-button:hover {
      background-color: #0b5ed7;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(13, 110, 253, 0.4);
    }

    /* Map Section */
    .map-section {
      background-color: #f0f4f8;
    }
    .map-container {
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      height: 400px;
      border: 4px solid #cce5ff;
    }

    /* FAQ Section */
    .faq-section {
      background-color: #eef4ff; 
      position: relative;
      overflow: hidden;
    }
    .faq-title {
      text-align: center; /* Ensures H2 and P are centered */
      margin-bottom: 40px; /* Standardized spacing */
    }
    .faq-title h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 15px;
    }
    .faq-title p {
      color: #475569;
      max-width: 800px;
      margin: 0 auto;
    }
    .faq-item {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
      margin-bottom: 10px;
      overflow: hidden;
      transition: box-shadow 0.3s;
    }
    .faq-item:hover {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    .faq-button {
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .faq-button:hover {
        background-color: #f0f8ff;
    }
    .faq-question {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      padding-right: 20px;
    }
    .faq-chevron {
      font-size: 1.2rem;
      color: #0d6efd;
      transition: transform 0.3s;
      transform: rotate(0deg);
    }
    .faq-button[aria-expanded="true"] .faq-chevron {
      transform: rotate(180deg);
    }
    .faq-answer-container {
      transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
    }
    .faq-answer-container.open {
      max-height: 500px; /* Sufficiently large value */
      opacity: 1;
    }
    .faq-answer {
      padding: 10px 20px 20px 20px;
      color: #475569;
      line-height: 1.6;
      border-top: 1px solid #e2e8f0;
    }
  `;

  return (
    <>
      <style>{cssStyles}</style>
      
      <div className="contact-page-container">
        {/* Status Message Toast */}
        {statusMessage.visible && (
          <div className="status-toast">
            <span className="status-icon">✅</span>
            <p style={{ fontWeight: 500, margin: 0 }}>{statusMessage.message}</p>
          </div>
        )}

        {/* Hero Section (Banner with Animation) */}
        <div className="hero-section">
          <div className={`hero-content max-width-container hero-fade-in ${isVisible ? 'hero-is-visible' : ''}`}>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#64748b', marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>CONTACT</p>
            <h1>Contact Information</h1>
            <p>
              Diagnosy always help to provide proper treatment for all of get proper cure and healty life which is the most focus thing
            </p>
          </div>
        </div>

        {/* Main Contact Section - Contact Info & Send Message */}
        <div className="py-section">
          <div className="max-width-container">
            <div className="contact-grid">
              {/* Left Side - Contact Information */}
              <div className={`contact-info-block section-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '300ms' }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 500, color: '#64748b', letterSpacing: '2px', textTransform: 'uppercase' }}>CONTACT WITH US</p>
                <h2>Contact Information</h2>
                <p>
                  Diagnosy always help to provide proper treatment for of get the proper cure and health life which is the perate focus thing for us patient our main propriety
                </p>

                <div className="space-y-10">
                  <ContactItem 
                    title="Address" 
                    lines={["256/A, Central Park, Monticarlo", "Main Town, New York City"]} 
                    icon="📍" 
                  />
                  <ContactItem 
                    title="Web & Mail" 
                    lines={["info@examples.com", "admin@examples.com"]} 
                    icon="📧" 
                  />
                  <ContactItem 
                    title="Phone" 
                    lines={["+12345 678 910", "+12345 678 910"]} 
                    icon="📞" 
                  />
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className={`contact-form-block section-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '500ms' }}>
                <h2>Send Message</h2>
                <p>
                  Diagnosy always help to provide proper treatment of get the proper cure and health life services
                </p>

                <form onSubmit={handleSubmit} className="form-group-container">
                  <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="form-input" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="form-input" />
                  </div>
                  <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="form-input" />
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="form-input" />
                  </div>
                  <div className="form-group">
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write message here" rows="7" required className="form-textarea"></textarea>
                  </div>

                  <button type="submit" className="form-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        {/* --- Map Section --- */}
        <div className="map-section py-section">
          <div className="max-width-container">
            {/* Using the .faq-title class now handles text centering and standardized margin */}
            <div className={`faq-title section-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '700ms' }}>
              <h2>Our Central Location</h2>
              <p>
                You can find our main clinic at the address listed above. We look forward to seeing you.
              </p>
            </div>
            
            <div className="map-container">
              {/* Google Maps Embed for Central Park, New York City */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433733468382!2d-74.006015!3d40.782865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral+Park!5e0!3m2!1sen!2sus!4v1422024628534"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location - Central Park, New York City"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section py-section">
          <div className="max-width-container">
            {/* Using the .faq-title class now handles text centering and standardized margin */}
            <div className={`faq-title section-fade-in ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '900ms' }}>
              <h2>Frequently Asked Questions</h2>
              <p>
                Find quick answers to the most common inquiries from our patients and clients.
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="faq-button"
                    aria-expanded={openFaq === index}
                  >
                    <span className="faq-question">{faq.question}</span>
                    <span className="faq-chevron" style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>&#x2304;</span>
                  </button>
                  <div
                    className={`faq-answer-container ${openFaq === index ? 'open' : ''}`}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
