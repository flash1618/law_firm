import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container main-content-container">
      <div className="contact-header">
        <h1>Contact S.J. Bondre & Co.</h1>
        <p>Get in touch with us for expert legal consultation and representation. We're here to help you with all your legal needs.</p>
      </div>

      <div className="contact-main-content">
        <div className="contact-info-section">
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">📍</div>
                <h2>Office Address</h2>
              </div>
              <div className="card-content">
                <p>
                  Office No.1, 1st Floor, Sai Sharan CHS Complex, Sector – 8, Khanda Colony, Panvel, Navi Mumbai, Maharashtra – 410206
                </p>
                <div className="address-details">
                  <p><strong>Landmark:</strong> Opposite Axis Bank, Khanda Colony Branch</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">📞</div>
                <h2>Phone Numbers</h2>
              </div>
              <div className="card-content">
                <div className="phone-list">
                  <div className="phone-item">
                    <span className="phone-label">Landline:</span>
                    <a href="tel:+02227464546" className="phone-number">022-27464546</a>
                  </div>
                  <div className="phone-item">
                    <span className="phone-label">Mobile:</span>
                    <a href="tel:+919322593358" className="phone-number">+91 9322593358</a>
                  </div>
                  <div className="phone-item">
                    <span className="phone-label">Mobile:</span>
                    <a href="tel:+919870889919" className="phone-number">9870889919</a>
                  </div>
                  <div className="phone-item">
                    <span className="phone-label">Mobile:</span>
                    <a href="tel:+919372680574" className="phone-number">9372680574</a>
                  </div>
                </div>
                <div className="call-note">
                  <p><strong>Note:</strong> Available 24/7 for urgent legal matters</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">✉️</div>
                <h2>Email Addresses</h2>
              </div>
              <div className="card-content">
                <div className="email-list">
                  <div className="email-item">
                    <span className="email-label">Primary:</span>
                    <a href="mailto:adv.s.bondre@gmail.com" className="email-address">adv.s.bondre@gmail.com</a>
                  </div>
                  <div className="email-item">
                    <span className="email-label">General:</span>
                    <a href="mailto:pra3nalgae@gmail.com" className="email-address">pra3nalgae@gmail.com</a>
                  </div>
                  <div className="email-item">
                    <span className="email-label">Support:</span>
                    <a href="mailto:bondrepranjal224@gmail.com" className="email-address">bondrepranjal224@gmail.com</a>
                  </div>
                </div>
                <div className="email-note">
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="office-hours">
            <h2>Office Hours & Consultation</h2>
            <div className="hours-content">
              <div className="hours-grid">
                <div className="hours-item">
                  <span className="day">Monday to Saturday</span>
                  <span className="time">9:30 am – 9:30 pm</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sunday</span>
                  <span className="time">Closed</span>
                </div>
                <div className="hours-item emergency">
                  <span className="day">Emergency</span>
                  <span className="time">24/7 Available</span>
                </div>
              </div>
              <div className="consultation-note">
                <p><strong>Important:</strong> Consultations are by appointment only. Please call ahead to schedule your visit.</p>
                <p><strong>Free Consultation:</strong> First 15 minutes consultation is free for new clients.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="contact-form-card">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="practiceArea">Practice Area</label>
                <select id="practiceArea" name="practiceArea">
                  <option value="">Select a practice area</option>
                  <option value="family-law">Family Law</option>
                  <option value="property-law">Property & Real Estate Law</option>
                  <option value="testamentary-law">Testamentary & Intestate Law</option>
                  <option value="consumer-law">Consumer Protection Law</option>
                  <option value="cheque-bounce">Cheque Bounce Cases</option>
                  <option value="society-law">Co-operative Housing Society Law</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} required placeholder="Please describe your legal matter in detail..."></textarea>
              </div>
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" name="privacy" required />
                  <span className="checkmark"></span>
                  I agree to the <a href="/policies" target="_blank">Privacy Policy</a> and <a href="/policies" target="_blank">Terms of Service</a>
                </label>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <p>Interactive Map Coming Soon</p>
            <p>Office Location: Panvel, Navi Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>

      <div className="emergency-contact">
        <h2>Emergency Legal Assistance</h2>
        <div className="emergency-content">
          <p>For urgent legal matters that cannot wait for regular office hours, please contact us immediately.</p>
          <div className="emergency-contacts">
            <div className="emergency-item">
              <span className="emergency-label">Emergency Hotline:</span>
              <a href="tel:+919322593358" className="emergency-number">+91 9322593358</a>
            </div>
            <div className="emergency-item">
              <span className="emergency-label">WhatsApp:</span>
              <a href="https://wa.me/919322593358" className="emergency-number">+91 9322593358</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
