import React, { useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 1. IMPORT SWIPER COMPONENTS AND STYLES
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import the banner image
import bannerImage from '../assets/images/1.png';

// --- Data for Multiple Testimonials ---
const testimonialData = [
    {
        name: "Roberto Carlos",
        title: "Civil Engineer",
        quote: "Diagnosy always help to provide proper are treatment for most of get the proper cure and health life which is the more an over that reason what should be care a lot about your health more perfect",
        avatar: "https://assets.website-files.com/63afc46367bbed70af80a31a/63c269e3dd3beb84504e5081_client-p-500.webp",
    },
    {
        name: "Maria Sanchez",
        title: "Teacher",
        quote: "The qualified doctors and modern instruments at Diagnosy made me feel safe and well-cared for. Highly recommend their cardiology department. Excellent service and support!",
        avatar: "https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg",
    },
    {
        name: "John Doe",
        title: "Marketing Manager",
        quote: "Getting my online report was fast and easy. The staff were very supportive and answered all my questions promptly. The best healthcare experience I've had.",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg", // Using a doctor image as a placeholder for variety
    },
];

// Initialize AOS when the component mounts
const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      mirror: false,
    });
    AOS.refresh();
    
    // Swiper tends to interact with the DOM, so a delayed AOS refresh can sometimes help
    setTimeout(() => {
        AOS.refreshHard(); 
    }, 100);

  }, []);
};

// --- Component Definitions (Unchanged components omitted for brevity) ---
const Hero = () => (
  <section className="hero" style={{ backgroundImage: `url(${bannerImage})` }}>
    <div className="container">
      <div className="hero-content">
        <span className="hero-subtitle" data-aos="fade-up" data-aos-delay="100">For Better Healthcare</span>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">Quality Healthcare Solution for all</h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
          Diagnosy always help to provide proper treatment for all of get the proper cure and healty life which is the most focus thing for us
        </p>
        <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="/services" className="btn btn-primary">Our Services</a>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="features section-padding-small"> 
    <div className="container" data-aos="fade-up">
      <div className="features-grid">
        
        {/* Item 1 */}
        <div className="feature-item-card" data-aos="zoom-in" data-aos-delay="200">
          <div className="feature-icon-wrapper">
            <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b3ac67196e182f61b7257c_car.svg" alt="Emergency Icon" />
          </div>
          <h3>24/7 Emergency service</h3>
        </div>

        {/* Item 2 */}
        <div className="feature-item-card" data-aos="zoom-in" data-aos-delay="300">
          <div className="feature-icon-wrapper">
            <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b3ad310b80141c5fa77e13_doctor.svg" alt="Doctor Icon" />
          </div>
          <h3>Qualified Doctors</h3>
        </div>

        {/* Item 3 */}
        <div className="feature-item-card" data-aos="zoom-in" data-aos-delay="400">
          <div className="feature-icon-wrapper">
            <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b3ad3e2ac12c14ecca0cc6_note.svg" alt="Report Icon" />
          </div>
          <h3>Get Online Report</h3>
        </div>

      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about section-padding"> 
    <div className="container">
      <div className="section-grid">
        {/* Image on the left (first in grid) */}
        <div className="about-image" data-aos="fade-right">
          <img src="https://assets.website-files.com/63afc46367bbed70af80a31a/63b3b6ec5bacadc6653b0c56_about-image.webp" alt="About Diagonsy Clinic" />
        </div>

        {/* Content on the right (second in grid) */}
        <div className="about-content" data-aos="fade-left">
          <span className="section-subtitle">Welcome To Diagonsy</span>
          <h2 className="section-title">Consult with our best Doctor for proper Treatment</h2>
          <p>
            We always Ensure best Medical treatment for your Health. Diagnosy always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services.
          </p>
          <ul className="about-list">
            <li data-aos="fade-left" data-aos-delay="200"><span className="about-list-icon">✓</span> Experience Doctors</li>
            <li data-aos="fade-left" data-aos-delay="300"><span className="about-list-icon">✓</span> Easy online Booking</li>
            <li data-aos="fade-left" data-aos-delay="400"><span className="about-list-icon">✓</span> Latest Machinary</li>
          </ul>
          <a href="#about" className="btn btn-secondary" data-aos="fade-left" data-aos-delay="500">Learn More</a>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="services section-padding bg-light">
    <div className="container">
      <div className="section-header" data-aos="fade-down">
        <span className="section-subtitle">Our Services</span>
        <h2 className="section-title">Different types of Department we have for your healthcare</h2>
      </div>
      <div className="services-grid">
        <div className="service-card" data-aos="fade-up" data-aos-delay="100">
          <div className="service-card-icon">
            <img src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b536bfe06df82ddafdc76b_Oncology.svg" alt="Oncology Icon" />
          </div>
          <h3>Oncology</h3>
          <p>Oncology always try to provide the get the proper cure are and proper treatment for patient.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="200">
          <div className="service-card-icon">
            <img src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt="Cardiology Icon" />
          </div>
          <h3>Cardiology</h3>
          <p>Cardiology always try to provide the get the proper cure are and proper treatment for patient.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="300">
          <div className="service-card-icon">
            <img src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b50f8e8991fa2805d9b032_Neurology.svg" alt="Neurology Icon" />
          </div>
          <h3>Neurology</h3>
          <p>Neurology always try to provide the get the proper cure are and proper treatment for patient.</p>
        </div>
        <div className="service-card" data-aos="fade-up" data-aos-delay="400">
          <div className="service-card-icon">
            <img src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b5126964a9588b232db451_Gynecology.svg" alt="Gynecology Icon" />
          </div>
          <h3>Gynecology</h3>
          <p>Gynecology always try to provide the proper of cure are and proper treatment for patient.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="why-choose-us section-padding">
    <div className="container">
      <div className="section-grid">
        <div className="why-choose-us-content" data-aos="fade-right">
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Complete Healthcare Solution for our valuable Patients</h2>
          <div className="choose-item" data-aos="fade-right" data-aos-delay="200">
            <div className="choose-item-icon">
              <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b55a113c477075f415160a_instrument-icon.svg" alt="Instrument Icon" />
            </div>
            <div>
              <h3>Modern Instrument</h3>
              <p>Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare.</p>
            </div>
          </div>
          <div className="choose-item" data-aos="fade-right" data-aos-delay="300">
            <div className="choose-item-icon">
              <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b55c2c8fbd99509a5025bd_card-icon.svg" alt="Billing Icon" />
            </div>
            <div>
              <h3>Easy Billing System</h3>
              <p>Diagnosy always try to provide the Billing system of get the proper very simple and easy.</p>
            </div>
          </div>
          <div className="choose-item" data-aos="fade-right" data-aos-delay="400">
            <div className="choose-item-icon">
              <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b55c3d13a7d90634fc6e06_nurses-icon.svg" alt="Staff Icon" />
            </div>
            <div>
              <h3>Qualified Nurses & Staff</h3>
              <p>Diagnosy always try to provide qualified Nurses & Stuff are get the proper cure Healthcare.</p>
            </div>
          </div>
        </div>
        <div className="why-choose-us-image" data-aos="fade-left">
          <img src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63b55ce43a6a5b519fd93f1e_Choose-thumbnail.webp" alt="Doctor with patient" />
        </div>
      </div>
    </div>
  </section>
);

const Doctors = () => (
  <section id="doctors" className="doctors section-padding bg-light">
    <div className="container">
      <div className="section-header" data-aos="fade-down">
        <span className="section-subtitle">OUR DOCTOR</span>
        <h2 className="section-title">Meet our high quality & expert Doctors</h2>
      </div>
      <div className="doctors-grid">
        <div className="doctor-card" data-aos="flip-left" data-aos-delay="100">
          <img className="doctor-card-image" src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf66af0b6557c1902b8fdd_2.jpg" alt="Dr. Elora Williams" />
          <h3>Dr. Elora Williams</h3>
          <p>Cardiologist</p>
        </div>
        <div className="doctor-card" data-aos="flip-left" data-aos-delay="200">
          <img className="doctor-card-image" src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf67653670fe67118a3c7c_3.jpg" alt="Dr. Michel Smith" />
          <h3>Dr. Michel Smith</h3>
          <p>Oncologist</p>
        </div>
        <div className="doctor-card" data-aos="flip-left" data-aos-delay="300">
          <img className="doctor-card-image" src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf677ad3d7deb3cdd9e793_4.jpg" alt="Dr. Rehana Bilkis" />
          <h3>Dr. Rehana Bilkis</h3>
          <p>Gynaecologist</p>
        </div>
        <div className="doctor-card" data-aos="flip-left" data-aos-delay="400">
          <img className="doctor-card-image" src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf6786064293398b6c3cc7_5.jpg" alt="Dr. Luther Mathews" />
          <h3>Dr. Luther Mathews</h3>
          <p>Neurologist</p>
        </div>
      </div>
    </div>
  </section>
);


// --- REFACTORED TESTIMONIALS COMPONENT USING SWIPER ---
const Testimonials = () => (
  <section className="testimonials section-padding">
    <div className="container">
      <div className="section-header" data-aos="fade-down">
        <span className="section-subtitle">TESTIMONIALS</span>
        <h2 className="section-title">Our Patients Say about our Services</h2>
      </div>
        
        {/* SWIPER CONTAINER */}
        <Swiper
            // Use Navigation and Pagination modules
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50} // Space between slides
            slidesPerView={1} // Only show one review at a time
            navigation={true} // Enable navigation arrows
            pagination={{ clickable: true }} // Enable dots for navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Optional: Autoplay feature
            className="testimonial-swiper-container"
            data-aos="fade-up"
        >
            {testimonialData.map((review, index) => (
                <SwiperSlide key={index}>
                    <div className="testimonial-card">
                        <img 
                            src={review.avatar} 
                            alt={review.name} 
                            className="testimonial-avatar" 
                        />
                        <p>"{review.quote}"</p>
                        <h4>{review.name}</h4>
                        <span>{review.title}</span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        
    </div>
  </section>
);


function Home() {
  // Call the hook to initialize AOS
  useAOS(); 

  return (
    <div className="App">
      <Hero />
      <Features />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials /> 
    </div>
  );
}

export default Home;