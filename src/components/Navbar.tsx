import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/practice-areas">Practice Areas</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/team">Meet Our Team</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
