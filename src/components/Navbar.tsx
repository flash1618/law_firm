import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">S.J. Bondre & Co.</Link>
      <div className="navbar-right-group">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/practice-areas" className="nav-link">Practice Areas</Link></li>
          <li className="nav-item"><Link to="/testimonials" className="nav-link">Testimonials</Link></li>
          <li className="nav-item"><Link to="/team" className="nav-link">Meet Our Team</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li className="nav-item"><Link to="/policies" className="nav-link">Policies</Link></li>
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
