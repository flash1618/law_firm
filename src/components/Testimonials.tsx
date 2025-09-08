import './Testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h1>Client Testimonials</h1>
      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p>"S.J. Bondre & Co. provided exceptional legal guidance during a challenging time. Their team was professional, empathetic, and achieved a favorable outcome for my family law case."</p>
          <p className="client-name">- Client A</p>
        </div>
        <div className="testimonial-card">
          <p>"I highly recommend S.J. Bondre & Co. for property matters. They handled my land registration with precision and kept me informed every step of the way. Truly a client-first approach!"</p>
          <p className="client-name">- Client B</p>
        </div>
        <div className="testimonial-card">
          <p>"The team at S.J. Bondre & Co. is incredibly knowledgeable and supportive. They navigated my consumer protection case with expertise, and I was very pleased with the results."</p>
          <p className="client-name">- Client C</p>
        </div>
      </div>

      <div className="google-reviews-section">
        <h2>Hear More From Our Clients</h2>
        <p>We pride ourselves on client satisfaction. Read more reviews on Google to see why individuals and families trust S.J. Bondre & Co. for their legal needs.</p>
        <button className="btn-primary">View Google Reviews</button>
      </div>
    </div>
  );
}

export default Testimonials;
