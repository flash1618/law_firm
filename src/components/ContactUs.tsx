import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Use Web3Forms (free service) for direct email sending
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3a4e2c71-6670-4565-a0ac-6a03597c0e46',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          practice_area: formData.practiceArea || 'Not specified',
          subject: formData.subject,
          message: formData.message,
          to: 'hiitssnehal@gmail.com',
          from_name: 'S.J. Bondre & Co. Contact Form'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        // Show success message
        alert('Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          practiceArea: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    }
  };
  return (
    <div className="contact-us-container">
      <div className="contact-header">
        <h1>Contact S.J. Bondre & Co.</h1>
        <p>Get in touch with us for expert legal consultation and representation. We are here to help you with all your legal needs.</p>
      </div>

      <div className="contact-main-content">
        <div className="contact-left-column">
          <div className="contact-card">
            <div className="card-icon"><Phone size={32} /></div>
            <h2>Contact</h2>
            <div className="card-content">
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-label">Call:</span>
                  <a href="tel:+919322593358" className="contact-number">+91 9322593358</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">WhatsApp:</span>
                  <a href="https://wa.me/919322593358" className="contact-number">+91 9322593358</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:adv.s.bondre@gmail.com" className="contact-email">adv.s.bondre@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="card-icon"><MapPin size={32} /></div>
            <h2>Office Address</h2>
            <div className="card-content">
              <p>
                <a 
                  href="https://www.google.com/maps/place/S.+J.+Bondre/@19.0063127,73.1074202,17z/data=!3m2!4b1!5s0x3be7e849b2f6ec01:0x4b246da7b0760d10!4m6!3m5!1s0x3be7e944b18d1d7d:0x5ab6457c741303a1!8m2!3d19.0063127!4d73.1099951!16s%2Fg%2F11f9zf2tht?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="address-link"
                >
                  Office No.1, 1st Floor, Sai Sharan CHS Complex, Plot No. 15, Sector – 8, Khanda Colony, Panvel, Navi Mumbai, Maharashtra – 410206
                </a>
              </p>
              <div className="address-details">
                <p><strong>Landmark:</strong> Opposite Axis Bank, Khanda Colony Branch</p>
              </div>
            </div>
          </div>

          <div className="office-hours">
            <div className="card-icon"><Clock size={32} /></div>
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
                <p><strong>Free Consultation:</strong> First 10 minutes consultation is free for new clients.</p>
                <p><strong>Stamp Paper:</strong> Not available on Saturday, Sunday and public holidays.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right-column">
          <div className="contact-form-card">
            <div className="card-icon"><Mail size={32} /></div>
            <h2>Send Us a Message</h2>
            <div className="card-content">
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              <br />
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="practiceArea">Practice Area</label>
                  <select 
                    id="practiceArea" 
                    name="practiceArea" 
                    value={formData.practiceArea}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a practice area</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Property and Real Estate">Property and Real Estate</option>
                    <option value="Testamentary Law">Testamentary Law</option>
                    <option value="Consumer Law">Consumer Law</option>
                    <option value="Civil Litigation">Civil Litigation</option>
                    <option value="Criminal Law">Criminal Law</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Marriage Registration">Marriage Registration</option>
                    <option value="Banking and Finance Law">Banking and Finance Law</option>
                    <option value="Stamp Paper Services & Notary">Stamp Paper Services & Notary</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
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
