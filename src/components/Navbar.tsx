import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
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
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <Link to="/" className={`navbar-brand ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
        S.J. Bondre & Co.
      </Link>
      <button className={`hamburger ${isOpen ? 'is-open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-right-group ${isOpen ? 'is-open' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/practice-areas" className={`nav-link ${isActive('/practice-areas') ? 'active' : ''}`} onClick={toggleMenu}>Practice Areas</Link></li>
          <li className="nav-item"><Link to="/testimonials" className={`nav-link ${isActive('/testimonials') ? 'active' : ''}`} onClick={toggleMenu}>Testimonials</Link></li>
          <li className="nav-item"><Link to="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`} onClick={toggleMenu}>Meet Our Team</Link></li>
          <li className="nav-item"><Link to="/careers" className={`nav-link ${isActive('/careers') ? 'active' : ''}`} onClick={toggleMenu}>Careers</Link></li>
          <li className="nav-item"><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={toggleMenu}>Contact Us</Link></li>
          <li className="nav-item"><Link to="/policies" className={`nav-link ${isActive('/policies') ? 'active' : ''}`} onClick={toggleMenu}>Policies</Link></li>
        </ul>
        <div className="navbar-contact">
          <span className="contact-text">Call us Today</span>
          <a href="tel:+919372680574" className="contact-phone">+91 9372680574</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
