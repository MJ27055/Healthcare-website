 import React, { useEffect } from 'react';
import { Clock, Activity, DollarSign, Heart, Play } from 'lucide-react';
import aboutImage from '../assets/images/about.png';
// --- AOS Imports ---
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS (copied from Home component logic)
const useAOS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);
};
// -------------------

export default function AboutPage() {
  // Initialize AOS
  useAOS(); 

  const stats = [
    { number: '8566+', label: 'Happy Patients' },
    { number: '135+', label: 'Qualified Doctors' },
    { number: '120+', label: 'Award Winning' }
  ];

  const services = [
    {
      icon: <Clock size={40} />,
      title: 'Emergency Services',
      description: 'Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare'
    },
    {
      icon: <Activity size={40} />,
      title: 'Modern Instrument',
      description: 'Diagnosy always try to provide the most common of get the proper issuer for cure Healthcare'
    },
    {
      icon: <DollarSign size={40} />,
      title: 'Easy Billing System',
      description: 'Diagnosy always try to provide the Billing system of get the proper very simple and easy'
    },
    {
      icon: <Heart size={40} />,
      title: 'Qualified Nurses & Staff',
      description: 'Diagnosy always try to provide qualified Nurses & Stuff are get the proper cure Healthcare'
    }
  ];

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf67b4b3cf9287b5cae722_8.jpg'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: 'https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf67653670fe67118a3c7c_3.jpg'
    },
    {
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrician',
      image: 'https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63cf677ad3d7deb3cdd9e793_4.jpg'
    }
  ];

  const testimonials = [
    {
      text: 'Diagnosy always help provide are treatment for most a more cure and health life which is an health more perfect service',
      author: 'John Smith',
      role: 'Patient'
    },
    {
      text: 'Diagnosy always help provide are treatment for most a more cure and health life which is an health more perfect service',
      author: 'Maria Garcia',
      role: 'Patient'
    },
    {
      text: 'Diagnosy always help provide are treatment for most a more cure and health life which is an health more perfect service',
      author: 'David Lee',
      role: 'Patient'
    }
  ];

  // Replace this URL with your own banner image
  const bannerImageUrl = aboutImage;

  return (
    <div style={styles.container}>
      {/* Banner - Fade in on load (AOS default) */}
      <section style={{...styles.banner, backgroundImage: `url(${bannerImageUrl})`}} data-aos="fade-in">
      </section>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          {/* Hero Image (Left) */}
          <div style={styles.heroLeft} data-aos="fade-right">
            <img 
              src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c61f1c5c029068cc672a2f_about-image-2.webp" 
              alt="Medical professional" 
              style={styles.heroImage}
            />
          </div>
          {/* Hero Content (Right) */}
          <div style={styles.heroRight} data-aos="fade-left">
            <h1 style={styles.heroTitle}>
              Consult with our best Doctor for proper Treatment
            </h1>
            <p style={styles.heroDescription}>
              Diagnosy always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services
            </p>
            <p style={styles.heroSubtext} data-aos="fade-left" data-aos-delay="200">
              Diagnosy always help to provide proper treatment for most of get the proper cure and healty life which cooperate
            </p>
            
            {/* Stats */}
            <div style={styles.statsContainer}>
              {stats.map((stat, index) => (
                <div key={index} style={styles.statBox} data-aos="zoom-in" data-aos-delay={300 + index * 100}>
                  <div style={styles.statNumber}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>

            <button style={styles.learnMoreBtn} data-aos="fade-up" data-aos-delay="600">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featuresHeader} data-aos="fade-down">
          <h2 style={styles.sectionTitle}>Complete Healthcare Solution for our valuable Patients</h2>
        </div>
        <div style={styles.featuresGrid}>
          {/* Staggered animation for feature cards */}
          {services.map((service, index) => (
            <div key={index} style={styles.featureCard} data-aos="fade-up" data-aos-delay={100 + index * 150}>
              <div style={styles.featureIcon}>{service.icon}</div>
              <h3 style={styles.featureTitle}>{service.title}</h3>
              <p style={styles.featureDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section style={styles.videoSection}>
        <div style={styles.videoContainer} data-aos="zoom-in">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop" 
            alt="Medical facility" 
            style={styles.videoThumbnail}
          />
          
        </div>
      </section>

      {/* Doctors Section */}
      <section style={styles.doctors}>
        <div style={styles.doctorsHeader} data-aos="fade-down">
          <h2 style={styles.sectionTitle}>Meet our high quality & expert Doctors</h2>
          <button style={styles.viewAllBtn}>View all</button>
        </div>
        <div style={styles.doctorsGrid}>
          {/* Staggered flip animation for doctor cards */}
          {doctors.map((doctor, index) => (
            <div key={index} style={styles.doctorCard} data-aos="flip-left" data-aos-delay={100 + index * 200}>
              <img src={doctor.image} alt={doctor.name} style={styles.doctorImage} />
              <div style={styles.doctorInfo}>
                <h3 style={styles.doctorName}>{doctor.name}</h3>
                <p style={styles.doctorSpecialty}>{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonials}>
         <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }} data-aos="fade-down">Our Patients Say about our Services</h2>
        <div style={styles.testimonialsGrid}>
          {/* Staggered animation for testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard} data-aos="fade-up" data-aos-delay={100 + index * 150}>
              <div style={styles.quoteIcon}>"</div>
              <p style={styles.testimonialText}>{testimonial.text}</p>
              <div style={styles.testimonialAuthor}>
                <div style={styles.authorAvatar}></div>
                <div>
                  <div style={styles.authorName}>{testimonial.author}</div>
                  <div style={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// --- STYLES REMAIN UNCHANGED ---
const styles = {
// ... (All your existing styles go here, I've omitted them for brevity in this response)
// You must keep all the original styles in your actual file.
// ... 
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#ffffff',
    color: '#333333',
  },
  banner: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '600px',
    position: 'relative',
  },
  hero: {
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '0 20px',
  },
  heroContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
  },
  heroLeft: {
    position: 'relative',
  },
  heroImage: {
    width: '80%',
    height: '500px',
    borderRadius: '40px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
  },
  heroRight: {
    paddingRight: '20px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    marginBottom: '20px',
    color: '#1e293b',
  },
  heroDescription: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#64748b',
    marginBottom: '15px',
  },
  heroSubtext: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#94a3b8',
    marginBottom: '30px',
  },
  statsContainer: {
    display: 'flex',
    gap: '30px',
    marginBottom: '30px',
  },
  statBox: {
    flex: 1,
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#0ea5e9',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#64748b',
  },
  learnMoreBtn: {
    backgroundColor: '#0ea5e9',
    color: 'white',
    border: 'none',
    padding: '15px 40px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  features: {
    backgroundColor: '#f8fafc',
    padding: '80px 20px',
  },
  featuresHeader: {
    maxWidth: '1200px',
    margin: '0 auto 60px',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '20px',
  },
  featuresGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
  },
  featureCard: {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  featureIcon: {
    color: '#0ea5e9',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '15px',
  },
  featureDescription: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.6',
  },
  videoSection: {
    maxWidth: '1200px',
    margin: '80px auto',
    padding: '0 20px',
  },
  videoContainer: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    height: '500px',
  },
  videoThumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0ea5e9',
    border: 'none',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  },
  doctors: {
    maxWidth: '1200px',
    margin: '80px auto',
    padding: '0 20px',
  },
  doctorsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  viewAllBtn: {
    backgroundColor: 'transparent',
    color: '#0ea5e9',
    border: '2px solid #0ea5e9',
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  doctorsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
  doctorCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s',
  },
  doctorImage: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
  },
  doctorInfo: {
    padding: '25px',
    textAlign: 'center',
  },
  doctorName: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '8px',
  },
  doctorSpecialty: {
    fontSize: '16px',
    color: '#0ea5e9',
  },
  testimonials: {
    backgroundColor: '#f8fafc',
    padding: '80px 20px',
  },
  testimonialsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginTop: '40px',
  },
  testimonialCard: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
  },
  quoteIcon: {
    fontSize: '60px',
    color: '#0ea5e9',
    lineHeight: '1',
    marginBottom: '20px',
  },
  testimonialText: {
    fontSize: '16px',
    color: '#64748b',
    lineHeight: '1.7',
    marginBottom: '30px',
  },
  testimonialAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  authorAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#0ea5e9',
  },
  authorName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
  },
  authorRole: {
    fontSize: '14px',
    color: '#94a3b8',
  },
};