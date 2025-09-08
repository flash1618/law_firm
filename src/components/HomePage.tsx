import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Experienced Advocates & Legal Consultants</h1>
          <p>S.J. Bondre & Co. | Navi Mumbai & Maharashtra - Providing practical, client-first legal solutions.</p>
          <button className="btn-primary">Book a Free Consultation</button>
        </div>
      </section>

      <section className="about-us-home-section">
        <div className="about-us-home-content">
          <h2>About S.J. Bondre & Co.</h2>
          <p>
            Founded in [Establishment Year], S.J. Bondre & Co. is a Panvel-based law firm dedicated to providing practical, client-first legal solutions. We serve individuals and families across Maharashtra in areas such as Family Law, Property and Real Estate, Testamentary Law, Consumer Law, and more.
          </p>
          <p>
            We combine experience with empathy, offering each client personalized attention and case-specific strategies for the best outcomes. With over [X Years] of service, our team continues to deliver efficient, cost-conscious, and result-oriented legal assistance.
          </p>
        </div>
        <div className="why-choose-us-home">
          <h2>Why Choose Us</h2>
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
        <h2>Our Success in Numbers</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <h3>[Y]+ Years</h3>
            <p>Experience</p>
          </div>
          <div className="metric-card">
            <h3>[Z]+ Cases</h3>
            <p>Successfully Handled</p>
          </div>
          <div className="metric-card">
            <h3>[W]%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
