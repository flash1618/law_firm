import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import bankofindiaLogo from '../assets/banks/Bank Of India.png';
import centralbankLogo from '../assets/banks/centralbank.png';
import statebankofindiaLogo from '../assets/banks/StateBankOfIndia.png';
import unionbankofindiaLogo from '../assets/banks/union-bank-of-india.svg';
import federalbankLogo from '../assets/banks/Federal Bank.png';
import dnyandeepLogo from '../assets/banks/Dnyandeep.jpg';
import gsmahanagatLogo from '../assets/banks/GSMahanagat.jpg';
import ssbankLogo from '../assets/banks/SS Bank.png';
import baramatiLogo from '../assets/banks/theBaramati.jpg';
import nationalLogo from '../assets/banks/TheNational.jpg';
import justiceImage from '../assets/justice/justice2.png';

function HomePage() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    // Check if disclaimer was already accepted in this session (not localStorage)
    const checkDisclaimer = () => {
      const accepted = sessionStorage.getItem('disclaimerAccepted') === 'true';
      if (accepted) {
        setDisclaimerAccepted(true);
      }
    };

    // Listen for a custom event when disclaimer is accepted
    const handleDisclaimerAccepted = () => {
      setDisclaimerAccepted(true);
    };

    // Check immediately and listen for the custom event
    checkDisclaimer();
    window.addEventListener('disclaimerAccepted', handleDisclaimerAccepted);
    
    return () => {
      window.removeEventListener('disclaimerAccepted', handleDisclaimerAccepted);
    };
  }, []);
  const bankLogos = [
    { src: bankofindiaLogo, alt: 'Bank of India' },
    { src: centralbankLogo, alt: 'Central Bank of India' },
    { src: statebankofindiaLogo, alt: 'State Bank of India' },
    { src: unionbankofindiaLogo, alt: 'Union Bank of India' },
    { src: federalbankLogo, alt: 'Federal Bank' },
    { src: dnyandeepLogo, alt: 'Dnyandeep Bank' },
    { src: gsmahanagatLogo, alt: 'GS Mahanagat Bank' },
    { src: ssbankLogo, alt: 'SS Bank' },
    { src: baramatiLogo, alt: 'The Baramati Bank' },
    { src: nationalLogo, alt: 'The National Bank' },
    // Duplicate for continuous scroll effect
    { src: bankofindiaLogo, alt: 'Bank of India' },
    { src: centralbankLogo, alt: 'Central Bank of India' },
    { src: statebankofindiaLogo, alt: 'State Bank of India' },
    { src: unionbankofindiaLogo, alt: 'Union Bank of India' },
    { src: federalbankLogo, alt: 'Federal Bank' },
    { src: dnyandeepLogo, alt: 'Dnyandeep Bank' },
    { src: gsmahanagatLogo, alt: 'GS Mahanagat Bank' },
    { src: ssbankLogo, alt: 'SS Bank' },
    { src: baramatiLogo, alt: 'The Baramati Bank' },
    { src: nationalLogo, alt: 'The National Bank' },
  ];

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="mobile-justice-image">
          <img src={justiceImage} alt="Lady Justice" />
        </div>
        <div className={`hero-content main-content-container ${disclaimerAccepted ? 'animate' : ''}`}>
          <div className="hero-text">
            <h1>Experienced Advocates & Legal Consultants</h1>
            <p>S.J. Bondre & Co. | Navi Mumbai & Maharashtra - Providing practical, client-first legal solutions.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link to="/practice-areas" className="btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us-home-section">
        <div className="about-us-home-content main-content-container">
          <h2>About S.J. Bondre & Co.</h2>
          <p>
                Founded in 1996, S.J. Bondre & Co. is a Panvel-based law firm dedicated to providing practical, client-first legal solutions. We serve individuals and families across Maharashtra in areas such as Family Law, Property and Real Estate, Testamentary Law, Consumer Law, and more.
          </p>
          <p>
            We combine experience with empathy, offering each client personalized attention and case-specific strategies for the best outcomes. With over 25+ Years of service, our team continues to deliver efficient, cost-conscious, and result-oriented legal assistance.
          </p>
        </div>
        <div className="why-choose-us-home main-content-container">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Tailored Approach:</strong> Each case is unique. We design case-specific strategies for effective outcomes.</li>
            <li><strong>Personal Attention:</strong> Our clients are treated with utmost care, and their legal matters are handled like our own.</li>
            <li><strong>Experienced Advocacy:</strong> Representing clients in courts across Mumbai, Navi Mumbai, and Maharashtra.</li>
            <li><strong>Cost Effectiveness:</strong> Transparent and reasonable legal fees without compromise on service quality.</li>
            <li><strong>Client-Centered Service:</strong> Reliable, responsive, and results-focused legal assistance.</li>
          </ul>
        </div>
      </section>

      <section className="success-metrics-section">
        <div className="main-content-container">
          <h2>Our Success in Numbers</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>25+ Years</h3>
              <p>Experience</p>
            </div>
            <div className="metric-card">
              <h3>5000+ Cases</h3>
              <p>Successfully Handled</p>
            </div>
            <div className="metric-card">
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="banks-served-section">
        <div className="main-content-container">
          <h2>Banks Served</h2>
          <p className="banks-intro">We are also on the bank panel of several banks, including:</p>
          <p className="banks-list">The Satara Sahakari Bank, The National Co-Operative Bank, Bank Of India, Dnyandeep Credit Society, Central Bank Of India, Union Bank Of India, GS Mahanagar Co-Operative Bank, The Baramati Sahakari Bank Ltd., Federal Bank, State Bank Of India, Reserve Bank Of India.</p>
          <div className="bank-logos-marquee">
            <div className="marquee-content">
              {bankLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} className="bank-logo" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
