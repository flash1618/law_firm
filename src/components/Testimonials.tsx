import { Star } from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials-container main-content-container">
      <h1>Client Testimonials</h1>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <div className="star-rating">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
          </div>
          <p>"I was here to get an Affidavit which was done quickly. The staff is cooperative."</p>
          <p className="client-name">- Pramod Shende</p>
        </div>
        <div className="testimonial-card">
          <div className="star-rating">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
          </div>
          <p>"Very good consultation at reasonable price. Will definitely refer!"</p>
          <p className="client-name">- Rahul Chandak</p>
        </div>
        <div className="testimonial-card">
          <div className="star-rating">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
          </div>
          <p>"They guide you properly on what type of stamp to take. A good place to buy stamp paper in Khanda Colony, Panvel."</p>
          <p className="client-name">- Neeraj Tiwari</p>
        </div>
        <div className="testimonial-card">
          <div className="star-rating">
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={20} />
          </div>
          <p>"All professional people. They are never out of stock for stamp papers. They follow all rules."</p>
          <p className="client-name">- Deepak Kadam</p>
        </div>
      </div>

      <div className="google-reviews-section">
        <h2>Hear More From Our Clients</h2>
        <p>We pride ourselves on client satisfaction. Read more reviews on Google to see why individuals and families trust S.J. Bondre & Co. for their legal needs.</p>
        <a href="https://www.google.com/search?sca_esv=d2ab6361f8823ac8&rlz=1C5MACD_enUS1059US1060&sxsrf=AE3TifM3pzE5Va_RGd7jhTxpcO_DsPpRzQ:1758850758220&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E25rSqlzGKdnsHY3jnisb11ug2PiTEz8LZu5LXOu_5YymgSHPzxRYX1R8Ygw3jfzmR-vdq1oG4K3VPLYJRJ4u4xrb8oT&q=S.+J.+Bondre+Reviews&sa=X&ved=2ahUKEwjV_J_VpfWPAxXhmSYFHfoUIgwQ0bkNegQIRhAD&biw=1440&bih=778&dpr=2" target="_blank" rel="noopener noreferrer" className="btn-primary">View Google Reviews</a>
      </div>
    </div>
  );
}

export default Testimonials;
