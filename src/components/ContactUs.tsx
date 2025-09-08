import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Contact S.J. Bondre & Co.</h1>

      <div className="contact-info-grid">
        <div className="contact-card">
          <h2>Office Address</h2>
          <p className="icon">📍</p>
          <p>
            Office No.1, 1st Floor, Sai Sharan CHS Complex, Sector – 8, Khanda Colony, Panvel, Navi Mumbai, Maharashtra – 410206
          </p>
        </div>

        <div className="contact-card">
          <h2>Phone</h2>
          <p className="icon">📞</p>
          <p><a href="tel:+02227464546">022-27464546</a></p>
          <p><a href="tel:+919322593358">+91 9322593358</a></p>
          <p><a href="tel:+919870889919">9870889919</a></p>
          <p><a href="tel:+919372680574">9372680574</a></p>
        </div>

        <div className="contact-card">
          <h2>Email</h2>
          <p className="icon">✉️</p>
          <p><a href="mailto:adv.s.bondre@gmail.com">adv.s.bondre@gmail.com</a></p>
          <p><a href="mailto:pra3nalgae@gmail.com">pra3nalgae@gmail.com</a></p>
          <p><a href="mailto:bondrepranjal224@gmail.com">bondrepranjal224@gmail.com</a></p>
        </div>
      </div>

      <div className="office-hours">
        <h2>Office Hours</h2>
        <p><span>Monday to Saturday:</span> <span>9:30 am – 9:30 pm</span></p>
        <p><span>Sunday:</span> <span>Closed</span></p>
        <p>Consultations by Appointment Only</p>
      </div>
    </div>
  );
}

export default ContactUs;
