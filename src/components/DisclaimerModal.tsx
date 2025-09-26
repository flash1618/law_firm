import { useState, useEffect } from 'react';
import './DisclaimerModal.css';

function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Show disclaimer every time
    setIsVisible(true);
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);

    sessionStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('disclaimerAccepted'));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAccepted(e.target.checked);
  };

  if (!isVisible) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-modal">
        <div className="disclaimer-header">
          <h2>Disclaimer</h2>
        </div>
        <div className="disclaimer-content">
          <p>
            In accordance with the rules of the Bar Council of India, law firms are prohibited from soliciting work and advertising. By accessing this website (www.bondrelawfirm.com), you acknowledge that there has been no advertisement, solicitation, or inducement of any sort whatsoever from us or any of our members to solicit any work through this website. The website does not create a lawyer-client relationship or offer legal advice.
          </p>
          <p>
            The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. We shall not be liable for any consequences arising from the use of information on this website.
          </p>
        </div>
        <div className="disclaimer-footer">
          <label className="disclaimer-checkbox">
            <input 
              type="checkbox" 
              checked={isAccepted}
              onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
            I accept the above.
          </label>
          <button 
            className="disclaimer-button" 
            onClick={handleAccept}
            disabled={!isAccepted}
          >
            PROCEED TO WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;
