import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
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
              <h3>1000+ Cases</h3>
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
          <h2><span>Banks Served</span> <span className="emoji">🏦</span></h2>
          <p>With over three decades of experience in Real Estate and Property Law, S.J. Bondre & Co. has become a trusted legal partner for numerous national, state, and co-operative banks. Our firm is known for its precision, timely delivery, and unwavering commitment to quality in every Title Search Report we prepare.</p>
          <p>We maintain clear communication and smooth coordination with bank officials to ensure an efficient and hassle-free process. Our professionalism, consistency, and integrity have helped us build strong long-term associations, making us a reliable choice for banks seeking thorough and dependable title verification and legal documentation support.</p>
          <h2><span>For Homebuyers and Property Owners</span> <span className="emoji">🏡</span></h2>
          <p>Before purchasing any property, conducting a Title Search is a crucial step to verify clear ownership and ensure that the property is free from legal disputes or encumbrances. It confirms that the seller holds a valid title and protects buyers from future risks or complications. A well-prepared Title Search Report provides clarity, transparency, and confidence in every transaction.</p>
          <p>At S.J. Bondre & Co., we assist homebuyers and property owners who wish to confirm that the title of their prospective house or plot is clear before making an investment. Whether you're buying your first home or expanding your property portfolio, our team ensures that your investment is legally sound and fully protected.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
