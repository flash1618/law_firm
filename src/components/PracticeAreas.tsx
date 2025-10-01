import { Link } from 'react-router-dom';
import { Users, Home, FileText, Scale, CreditCard, Building } from 'lucide-react';
import './PracticeAreas.css';

function PracticeAreas() {
  return (
    <div className="practice-areas-container main-content-container">
      <div className="practice-areas-header">
        <h1>Our Practice Areas</h1>
        <p>Comprehensive legal services tailored to meet your specific needs. Our experienced team provides expert representation across various areas of law.</p>
      </div>

      <div className="practice-areas-grid">
        <div className="practice-area-card">
          <div className="card-icon"><Users size={32} /></div>
          <h2>Family Law</h2>
          <p className="card-description">Expert guidance through complex family matters with compassion and legal expertise.</p>
          <ul>
            <li>Divorce by Mutual Consent</li>
            <li>Contested Divorce</li>
            <li>Domestic Violence Cases</li>
            <li>Child Custody & Maintenance</li>
            <li>Property Division</li>
            <li>Adoption & Guardianship</li>
          </ul>
          <div className="card-footer">
            <span className="experience">25+ Years Experience</span>
          </div>
        </div>

        <div className="practice-area-card">
          <div className="card-icon"><Home size={32} /></div>
          <h2>Property & Real Estate Law</h2>
          <p className="card-description">Secure your property investments with our comprehensive real estate legal services.</p>
          <ul>
            <li>Registration of Flats, Shops, Land</li>
            <li>Title Search & Reports for Banks/Individuals</li>
            <li>Notice of Intimation</li>
            <li>Property Documentation</li>
            <li>Land Dispute Resolution</li>
            <li>RERA Compliance</li>
          </ul>
          <div className="card-footer">
            <span className="experience">1000+ Cases Successfully Handled</span>
          </div>
        </div>

        <div className="practice-area-card">
          <div className="card-icon"><FileText size={32} /></div>
          <h2>Testamentary & Intestate Law</h2>
          <p className="card-description">Ensure your legacy is protected with proper estate planning and succession matters.</p>
          <ul>
            <li>Wills & Gift Deeds</li>
            <li>Succession Certificates</li>
            <li>Succession and Heirship Certificate</li>
            <li>Probate Proceedings</li>
            <li>Estate Planning</li>
            <li>Inheritance Disputes</li>
            <li>Trust Formation</li>
          </ul>
          <div className="card-footer">
            <span className="experience">Expert Guidance</span>
          </div>
        </div>

        <div className="practice-area-card">
          <div className="card-icon"><Scale size={32} /></div>
          <h2>Consumer Protection Law</h2>
          <p className="card-description">Protect your consumer rights and seek justice for unfair trade practices.</p>
          <ul>
            <li>Consumer Protection Cases</li>
            <li>Defective Product Claims</li>
            <li>Service Deficiency Complaints</li>
            <li>Insurance Disputes</li>
            <li>Banking Complaints</li>
          </ul>
          <div className="card-footer">
            <span className="experience">95% Success Rate</span>
          </div>
        </div>

        <div className="practice-area-card">
          <div className="card-icon"><CreditCard size={32} /></div>
          <h2>Cheque Bounce Cases</h2>
          <p className="card-description">Expert representation in Negotiable Instruments Act cases with proven track record.</p>
          <ul>
            <li>Cheque Bounce Cases (N.I. Act)</li>
            <li>Recovery Proceedings</li>
            <li>Defense Strategies</li>
            <li>Settlement Negotiations</li>
            <li>Appeal Proceedings</li>
            <li>Compounding Applications</li>
          </ul>
          <div className="card-footer">
            <span className="experience">Quick Resolution</span>
          </div>
        </div>

        <div className="practice-area-card">
          <div className="card-icon"><Building size={32} /></div>
          <h2>Co-operative Housing Society Law</h2>
          <p className="card-description">Navigate complex society laws and regulations with our specialized expertise.</p>
          <ul>
            <li>Society Formation & Registration</li>
            <li>Member Disputes Resolution</li>
            <li>Election Disputes</li>
            <li>Legal Notices & Proceedings</li>
          </ul>
          <div className="card-footer">
            <span className="experience">Specialized Knowledge</span>
          </div>
        </div>
      </div>

      <div className="additional-services">
        <h2>Additional Legal Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Legal Drafting & Notices</h3>
            <p>Professional drafting of legal documents, notices, and contracts tailored to your specific requirements, including Title Search, Search Report, LSR I and LSR II services.</p>
          </div>
          <div className="service-item">
            <h3>Legal Consultation</h3>
            <p>Expert legal advice and consultation on various matters to help you make informed decisions.</p>
          </div>
          <div className="service-item">
            <h3>Court Representation</h3>
            <p>Experienced representation in various courts across Mumbai, Navi Mumbai, and Maharashtra.</p>
          </div>
          <div className="service-item">
            <h3>Client Counselling</h3>
            <p>Comprehensive legal counselling and guidance to help you understand your rights, options, and the best course of action for your legal matters.</p>
          </div>
          <div className="service-item">
            <h3>Drafting of Various Agreements</h3>
            <p>Professional drafting of Sale Agreements, Resale Agreements, Development Agreements, Tripartite Agreements, Partnership Deed, Power of Attorney, and other legal documents.</p>
          </div>
          <div className="service-item">
            <h3>Stamp Paper Services & Notary</h3>
            <p>Comprehensive stamp paper services and notary assistance (notary outsourced). We handle drafting and execution of various affidavits required for routine legal matters such as Rent Agreements, Gap Affidavits, Affidavits required for Gazette and Income Tax, and more.</p>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose S.J. Bondre & Co.?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h3>Client-Focused Approach</h3>
            <p>We prioritize your needs and provide personalized legal solutions for every case.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Quick Response</h3>
            <p>Fast and efficient service with quick turnaround times for all legal matters.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💰</div>
            <h3>Transparent Pricing</h3>
            <p>Clear, upfront pricing with no hidden costs. We believe in fair and reasonable fees.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🏆</div>
            <h3>Proven Track Record</h3>
            <p>Over 25+ years of experience with thousands of successful cases and satisfied clients.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need Legal Assistance?</h2>
        <h3>10 Minutes Consultation</h3>
        <p><strong>Only on call</strong> - Don't hesitate and get your doubts cleared!</p>
        <p><strong>Call:</strong> <a href="tel:+919322593358">+91 9322593358</a></p>
        <p><strong>Email:</strong> <a href="mailto:adv.s.bondre@gmail.com">adv.s.bondre@gmail.com</a></p>
        <p><strong>By Appointment Only</strong></p>
        <Link to="/contact" className="free-consultation"><strong>First 10 minutes consultation is FREE for new clients!</strong></Link>
      </div>
    </div>
  );
}

export default PracticeAreas;
