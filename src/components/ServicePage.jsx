 import React, { useState, useEffect, useRef } from 'react';

// Icon URLs remain the same
const iconMap = {
  Oncology: 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed338cd075be471fd5c6_Oncology.svg',
  Cardiology: 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed5aafad0b3a76e4d718_Cardiology.svg',
  Gynecology: 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed591c21783a5ad54f61_Gynecology.svg',
  Neurology: 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed593b2b76f952bbb4d1_Neurology.svg',
  "Child Health": 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed5a8cd075f87d1fd87c_Child%20Health.svg',
  "Dental Care": 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed5ad06f108f71810c6c_Dental%20Care.svg',
  Nephrology: 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed58afad0b1262e4d710_Nephrology.svg',
  "Lab Test": 'https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c4ed58afad0b0ccae4d711_Lab%20Test.svg',
};

// --- CUSTOM HOOK: IntersectionObserver for Scroll Animations ---
const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

export default function ServicePage() {
    const services = [
      {
        id: 1,
        title: "Oncology",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce27721a2c8464e88b6656_9.jpg",
        link: "/service/oncology",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Oncology treatment"],
        description: "Oncology always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. This department focuses on the diagnosis and treatment of cancer."
      },
      {
        id: 2,
        title: "Cardiology",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce27b714bd05390ae2647f_2.jpg",
        link: "/service/cardiology",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Cardiology treatment"],
        description: "Cardiology always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. We specialize in disorders of the heart and the cardiovascular system."
      },
      {
        id: 3,
        title: "Gynecology",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce2a6ff329ee0c4b29beca_4.jpg",
        link: "/service/gynecology",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Gynecology treatment"],
        description: "Gynecology always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. Dedicated care for women's reproductive health."
      },
      {
        id: 4,
        title: "Neurology",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce2a5b5fad4a0b4a8e9e7e_3.jpg",
        link: "/service/neurology",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Neurology treatment"],
        description: "Neurology always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. Specialized services for disorders of the nervous system."
      },
      {
        id: 5,
        title: "Child Health",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce2a9dcf939edff7f3215d_5.jpg",
        link: "/service/child-health",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Child Health treatment"],
        description: "Child Health always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. Comprehensive pediatric care for children of all ages."
      },
      {
        id: 6,
        title: "Dental Care",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce2ab3c8b33a001829b8b1_6.jpg",
        link: "/service/dental-care",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Dental Care treatment"],
        description: "Dental Care always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. High-quality services for oral and dental health."
      },
      {
        id: 7,
        title: "Nephrology",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce2ad914bd05b749e299df_7.jpg",
        link: "/service/nephrology",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Nephrology treatment"],
        description: "Nephrology always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. Focusing on the care of kidney-related diseases."
      },
      {
        id: 8,
        title: "Lab Test",
        image: "https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63ce2aef70e278083e43588b_8.jpg",
        link: "/service/lab-test",
        bullets: ["Expert Doctor always ready to make quick dicission", "Modern technology uses for Lab Test"],
        description: "Lab Test always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services. Reliable and quick diagnostic laboratory services."
      }
    ];

    const [activeServiceId, setActiveServiceId] = useState(services[0].id);
    const activeService = services.find(s => s.id === activeServiceId);
    const [hoveredIconId, setHoveredIconId] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isBtnHovered, setIsBtnHovered] = useState(false);
    const [hoveredBullet, setHoveredBullet] = useState(null);

    // --- References for animation: ---
    const [headerRef, isHeaderVisible] = useScrollAnimation(0.3);
    const [heroRef, isHeroVisible] = useScrollAnimation(0.5); 
    const [servicesRef, isServicesVisible] = useScrollAnimation(0.2);
    const [statsRef, isStatsVisible] = useScrollAnimation(0.3);
    const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation(0.2);


    const styles = {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        page: {
            fontFamily: "'DM Sans', sans-serif",
            color: '#1a1a1a',
            backgroundColor: '#fff',
            lineHeight: 1.6
        },
        
        // --- ANIMATION BASE STYLES ---
        animatedSection: (isVisible, delay = 0) => ({
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
        }),
        staggeredItem: (isVisible, index, baseDelay = 0.1, duration = 0.6) => ({
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity ${duration}s ease-out ${baseDelay * index}s, transform ${duration}s ease-out ${baseDelay * index}s`,
        }),
        // -----------------------------

        heroSection: {
            display: 'flex',
            alignItems: 'center',
            padding: '100px 5% 120px',
            gap: '80px',
            maxWidth: '1320px',
            margin: '0 auto',
            transition: 'all 0.8s ease-out',
        },
        heroImageWrap: {
            flex: '0 0 45%',
            position: 'relative'
        },
        heroImage: {
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            display: 'block'
        },
        heroContent: {
            flex: '1'
        },
        heroTitle: {
            fontSize: '52px',
            fontWeight: '700',
            color: '#0f2137',
            lineHeight: '1.2',
            marginBottom: '28px',
            letterSpacing: '-0.5px'
        },
        heroParagraph: {
            fontSize: '16px',
            color: '#6a6a8e',
            lineHeight: '1.8',
            marginBottom: '18px'
        },
        appointmentBtn: {
            display: 'inline-block',
            backgroundColor: isBtnHovered ? '#02c9a5' : '#0f2137',
            color: '#fff',
            padding: '18px 45px',
            textDecoration: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: '600',
            marginTop: '25px',
            transition: 'all 0.3s ease',
            border: 'none',
            cursor: 'pointer',
            boxShadow: isBtnHovered ? '0 10px 20px rgba(15, 33, 55, 0.4)' : 'none',
        },
        servicesSection: {
            backgroundColor: '#f7f8fb',
            padding: '100px 5% 110px'
        },
        sectionTitle: {
            textAlign: 'center',
            fontSize: '46px',
            fontWeight: '700',
            color: '#0f2137',
            marginBottom: '70px',
            lineHeight: '1.3',
            maxWidth: '850px',
            margin: '0 auto 70px',
            letterSpacing: '-0.5px',
            transition: 'all 0.6s ease-out',
        },
        iconGrid: {
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '60px',
            maxWidth: '1320px',
            margin: '0 auto 60px',
            flexWrap: 'wrap',
        },
        iconWrapper: {
            width: '90px',
            height: '90px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            border: '1px solid #e6e6f1',
            transition: 'all 0.3s ease, transform 0.3s, box-shadow 0.3s',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
        },
        iconWrapperHover: {
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            transform: 'translateY(-3px)',
            borderColor: '#02c9a5',
        },
        icon: {
            width: '40px',
            height: '40px',
            filter: 'invert(9%) sepia(100%) saturate(7471%) hue-rotate(244deg) brightness(91%) contrast(147%)',
            animation: 'iconPulse 2s ease-in-out infinite',
        },
        iconActive: {
            backgroundColor: '#02c9a5',
            border: '1px solid #02c9a5',
            boxShadow: '0 8px 25px rgba(2, 201, 165, 0.3)',
            transform: 'translateY(-3px)',
        },
        iconImageActive: {
            filter: 'invert(9%) sepia(100%) saturate(7471%) hue-rotate(244deg) brightness(91%) contrast(147%)',
        },
        activeServiceDisplay: {
            display: 'flex',
            gap: '80px',
            alignItems: 'center',
            maxWidth: '1320px',
            margin: '0 auto',
            backgroundColor: '#fff',
            padding: '60px',
            borderRadius: '10px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
        },
        activeServiceImageWrap: {
            flex: '0 0 45%',
            position: 'relative',
        },
        activeServiceImage: {
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            display: 'block',
        },
        activeServiceContent: {
            flex: '1',
        },
        activeServiceTitle: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#0f2137',
            marginBottom: '20px',
            lineHeight: '1.3',
            letterSpacing: '-0.3px',
        },
        activeServiceText: {
            fontSize: '16px',
            color: '#6a6a6e',
            marginBottom: '15px',
            lineHeight: '1.8',
        },
        bulletList: {
            listStyle: 'none',
            margin: '20px 0',
            padding: 0
        },
        bulletItem: (idx) => ({
            fontSize: '14px',
            color: hoveredBullet === idx ? '#0f2137' : '#6a6a8e',
            marginBottom: '12px',
            paddingLeft: '25px',
            position: 'relative',
            lineHeight: '1.6',
            transition: 'color 0.3s ease, transform 0.3s ease',
            transform: hoveredBullet === idx ? 'translateX(5px)' : 'translateX(0)',
        }),
        bulletIcon: (idx) => ({
            position: 'absolute',
            left: 0,
            top: '3px',
            backgroundColor: hoveredBullet === idx ? '#0f2137' : '#02c9a5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: '#fff',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
        }),
        detailsLink: {
            display: 'inline-block',
            color: '#02c9a5',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '600',
            marginTop: '15px',
            transition: 'color 0.3s ease',
            letterSpacing: '0.3px'
        },
        statsSection: {
            backgroundColor: '#0f2137',
            padding: '80px 5%',
            color: '#fff',
            transition: 'all 0.8s ease-out',
        },
        statsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px',
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center'
        },
        statNumber: {
            fontSize: '56px',
            fontWeight: '700',
            color: '#02c9a5',
            marginBottom: '12px',
            letterSpacing: '-1px'
        },
        statLabel: {
            fontSize: '18px',
            color: '#fff',
            fontWeight: '500',
            letterSpacing: '0.3px'
        },
        testimonialsSection: {
            padding: '100px 5% 110px',
            backgroundColor: '#fff',
            transition: 'all 0.8s ease-out',
        },
        testimonialsTitle: {
            textAlign: 'center',
            fontSize: '42px',
            fontWeight: '700',
            color: '#0f2137',
            marginBottom: '60px',
            letterSpacing: '-0.5px',
            transition: 'all 0.6s ease-out',
        },
        testimonialsGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '35px',
            maxWidth: '1320px',
            margin: '0 auto'
        },
        testimonialCard: (idx) => ({
            backgroundColor: '#f7f8fb',
            padding: '40px 35px',
            borderRadius: '10px',
            fontSize: '15px',
            color: '#6a6a8e',
            lineHeight: '1.8',
            borderLeft: '4px solid #02c9a5',
            transition: 'all 0.3s ease',
            transform: hoveredCard === `testimonial-${idx}` ? 'translateY(-5px)' : 'translateY(0)',
            boxShadow: hoveredCard === `testimonial-${idx}` ? '0 15px 30px rgba(0,0,0,0.1)' : '0 5px 15px rgba(0,0,0,0.05)',
        }),
    };


    return (
        <div style={styles.page}>
            <style>
                {`
                    @keyframes iconPulse {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.1);
                        }
                    }

                    @keyframes slideInLeft {
                        from {
                            transform: translateX(-100%);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    @keyframes slideInBottom { 
                        from {
                            transform: translateY(100px); /* Changed from translateX to translateY */
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .animate-slide-left {
                        animation: slideInLeft 1s ease-out forwards;
                        opacity: 0;
                    }

                    .animate-slide-bottom { /* New class name */
                        animation: slideInBottom 1s ease-out forwards;
                        opacity: 0;
                    }
                `}
            </style>
            {/* Services Header Section with Animation */}
            <section
                ref={headerRef}
                className="animate-slide-left"
                style={{
                    textAlign: 'center',
                    padding: '120px 5% 80px',
                    background: 'linear-gradient(135deg, #e0edffff 0%, #f0f2ffff 50%, #e8f5ff 100%)',
                    overflow: 'hidden'
                }}
            >
                <div style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    letterSpacing: '2px',
                    color: '#6a6a8e',
                    marginBottom: '20px',
                    textTransform: 'uppercase',
                    ...styles.staggeredItem(isHeaderVisible, 0, 0.1, 0.8)
                }}>
                    SERVICE
                </div>
                <h1 style={{
                    fontSize: '56px',
                    fontWeight: '700',
                    color: '#0f2137',
                    lineHeight: '1.2',
                    marginBottom: '25px',
                    letterSpacing: '-0.5px',
                    ...styles.staggeredItem(isHeaderVisible, 1, 0.15, 0.8)
                }}>
                    Our Services
                </h1>
                <p style={{
                    fontSize: '16px',
                    color: '#6a6a8e',
                    lineHeight: '1.8',
                    maxWidth: '700px',
                    margin: '0 auto',
                    ...styles.staggeredItem(isHeaderVisible, 2, 0.15, 0.8)
                }}>
                    Diagnosy always help to provide proper treatment for all of get proper cure and healty life which is the most focus thing
                </p>
            </section>

            {/* Hero Section (Main animation) */}
            <section
                ref={heroRef}
                className="animate-slide-bottom" // <-- NEW CLASS APPLIED HERE
                style={{
                    ...styles.heroSection,
                    ...styles.animatedSection(isHeroVisible, 0.1)
                }}
            >
                <div style={styles.heroImageWrap}>
                    <img
                        src="https://cdn.prod.website-files.com/63afc46367bbed70af80a31a/63c78211c7ba4a41cc1ead7d_about-image-3.webp"
                        alt="Doctor consultation"
                        style={styles.heroImage}
                    />
                </div>
                <div style={styles.heroContent}>
                    <h1 style={styles.heroTitle}>
                        Provide best Treatment with expert Doctors
                    </h1>
                    <p style={styles.heroParagraph}>
                        Diagnosy always help to provide proper treatment for most of get the proper cure and healty life which is the cooperate focus thing for us patient our main proprity services
                    </p>
                    <p style={styles.heroParagraph}>
                        Diagnosy always help to provide proper treatment for most of get the proper cure and healty life which cooperate
                    </p>
                    <a 
                        href="/appointment" 
                        style={styles.appointmentBtn}
                        onMouseEnter={() => setIsBtnHovered(true)}
                        onMouseLeave={() => setIsBtnHovered(false)}
                    >
                        Make an Appointment
                    </a>
                </div>
            </section>

            {/* Services Section */}
            <section style={styles.servicesSection}>
                <div ref={servicesRef}>
                    <h2 
                        style={{ 
                            ...styles.sectionTitle, 
                            ...styles.staggeredItem(isServicesVisible, 0, 0.1, 0.6) 
                        }}
                    >
                        Different types of Department we have for your healthcare
                    </h2>

                    {/* Clickable Icons Grid with Hover and Animation */}
                    <div style={styles.iconGrid}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                style={{
                                    ...styles.iconWrapper,
                                    ...(service.id === activeServiceId ? styles.iconActive : {}),
                                    ...((hoveredIconId === service.id && service.id !== activeServiceId) ? styles.iconWrapperHover : {}),
                                    ...styles.staggeredItem(isServicesVisible, index + 1, 0.08, 0.5), 
                                }}
                                onClick={() => setActiveServiceId(service.id)}
                                onMouseEnter={() => setHoveredIconId(service.id)}
                                onMouseLeave={() => setHoveredIconId(null)}
                            >
                                <img 
                                    src={iconMap[service.title]} 
                                    alt={`${service.title} icon`} 
                                    style={{
                                        ...styles.icon,
                                        ...(service.id === activeServiceId ? styles.iconImageActive : {}),
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Active Service Content Display with Animation */}
                    {activeService && (
                        <div 
                            style={{
                                ...styles.activeServiceDisplay,
                                ...styles.animatedSection(isServicesVisible, 0.4)
                            }}
                        >
                            <div style={styles.activeServiceImageWrap}>
                                <img
                                    src={activeService.image}
                                    alt={activeService.title}
                                    style={styles.activeServiceImage}
                                />
                            </div>
                            <div style={styles.activeServiceContent}>
                                <h3 style={styles.activeServiceTitle}>
                                    {activeService.title} is most impressive here, you can trust about our treatment
                                </h3>
                                <p style={styles.activeServiceText}>
                                    {activeService.description}
                                </p>
                                <p style={styles.activeServiceText}>
                                    {activeService.title} always help to provide proper treatment for most of get the proper cure and healty life which cooperate
                                </p>
                                <ul style={styles.bulletList}>
                                    {activeService.bullets.map((bullet, idx) => (
                                        <li 
                                            key={idx} 
                                            style={styles.bulletItem(idx)}
                                            onMouseEnter={() => setHoveredBullet(idx)}
                                            onMouseLeave={() => setHoveredBullet(null)}
                                        >
                                            <span style={styles.bulletIcon(idx)}>✓</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={activeService.link}
                                    style={styles.detailsLink}
                                >
                                    Details →
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section 
                ref={statsRef} 
                style={{ 
                    ...styles.statsSection, 
                    ...styles.animatedSection(isStatsVisible) 
                }}
            >
                <div style={styles.statsGrid}>
                    {['120+', '350+', '125k+'].map((number, index) => (
                        <div 
                            key={index} 
                            style={styles.staggeredItem(isStatsVisible, index, 0.15, 0.7)}
                        >
                            <div style={styles.statNumber}>{number}</div>
                            <div style={styles.statLabel}>
                                {index === 0 ? 'Award Winning' : index === 1 ? 'Expert Doctors' : 'Happy Patients'}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={styles.testimonialsSection}>
                <div ref={testimonialsRef}>
                    <h2 
                        style={{ 
                            ...styles.testimonialsTitle,
                            ...styles.staggeredItem(isTestimonialsVisible, 0, 0.1, 0.6)
                        }}
                    >
                        Our Patients Say about our Services
                    </h2>
                    <div style={styles.testimonialsGrid}>
                        {[1, 2, 3].map((idx, index) => (
                            <div 
                                key={idx} 
                                style={{
                                    ...styles.testimonialCard(idx),
                                    ...styles.staggeredItem(isTestimonialsVisible, index + 1, 0.15, 0.7),
                                }}
                                onMouseEnter={() => setHoveredCard(`testimonial-${idx}`)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                Diagnosy always help provide are treatment for most a more cure and health life which is an health more perfect service
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}