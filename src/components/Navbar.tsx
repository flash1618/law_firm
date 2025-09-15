import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        S.J. Bondre & Co.
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-right-group ${isOpen ? 'is-open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/practice-areas" className="nav-link" onClick={toggleMenu}>Practice Areas</Link></li>
          <li className="nav-item"><Link to="/testimonials" className="nav-link" onClick={toggleMenu}>Testimonials</Link></li>
          <li className="nav-item"><Link to="/team" className="nav-link" onClick={toggleMenu}>Meet Our Team</Link></li>
          <li className="nav-item"><Link to="/careers" className="nav-link" onClick={toggleMenu}>Careers</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact Us</Link></li>
          <li className="nav-item"><Link to="/policies" className="nav-link" onClick={toggleMenu}>Policies</Link></li>
        </ul>
        <div className="navbar-contact">
          <span className="contact-text">Call us Today</span>
          <a href="tel:+919322593358" className="contact-phone">+91 9322593358</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
