import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element)?.closest('.navbar')) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={closeMenu}>
        S.J. Bondre & Co.
      </Link>
      <button className={`hamburger ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
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
