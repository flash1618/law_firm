import { useState } from 'react';
import './Careers.css';

function Careers() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const handleApplyClick = (position: string) => {
    const subject = `Application for ${position} Position`;
    const mailtoLink = `mailto:adv.s.bondre@gmail.com?subject=${encodeURIComponent(subject)}`;
    window.open(mailtoLink, '_self');
  };
  return (
    <div className="careers-container">
      <h1>Join Our Team</h1>
      
      <div className="careers-intro">
        <p>
          At S.J. Bondre & Co., we believe that our people are our greatest asset. We are always looking for talented, dedicated professionals who share our commitment to excellence and client service.
        </p>
      </div>

      <div className="careers-grid">
        <div className="career-card">
          <h3>Junior Advocate</h3>
          <div className="career-details">
            <p><strong>Experience:</strong> 2-5 years</p>
            <p><strong>Location:</strong> Navi Mumbai, Maharashtra</p>
            <p><strong>Type:</strong> Full-time</p>
          </div>
          {expandedCards['associate'] && (
          <div className="career-description">
            <p>We are seeking an enthusiastic Junior Advocate to join our growing practice. The ideal candidate will have experience in civil litigation and a passion for helping clients navigate complex legal matters.</p>
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>Represent clients in court proceedings</li>
              <li>Draft legal documents and contracts</li>
              <li>Conduct legal research and analysis</li>
              <li>Maintain client relationships</li>
              <li>Collaborate with senior advocates on complex cases</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
              <li>LL.B. degree from a recognized university</li>
              <li>Valid Bar Council registration</li>
              <li>2-5 years of relevant experience</li>
              <li>Strong communication and analytical skills</li>
              <li>Proficiency in Marathi and English</li>
            </ul>
          </div>
          )}
          <div className="read-more" onClick={() => toggleCard('associate')}>
            <p>{expandedCards['associate'] ? '− Read Less' : '+ Read More'}</p>
          </div>
          <button className="btn-primary" onClick={() => handleApplyClick('Junior Advocate')}>Apply Now</button>
        </div>

        <div className="career-card">
          <h3>Legal Intern</h3>
          <div className="career-details">
            <p><strong>Duration:</strong> 3-6 months</p>
            <p><strong>Location:</strong> Navi Mumbai, Maharashtra</p>
            <p><strong>Type:</strong> Paid Internship</p>
          </div>
          {expandedCards['intern'] && (
          <div className="career-description">
            <p>We offer internship opportunities for law students who want to gain practical experience in a real legal practice environment.</p>
            <h4>What You'll Learn:</h4>
            <ul>
              <li>Court procedures and litigation process</li>
              <li>Legal document drafting</li>
              <li>Client interaction and case management</li>
              <li>Research and analysis techniques</li>
              <li>Professional ethics and conduct</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
              <li>Currently enrolled in LL.B. program</li>
              <li>Strong academic record</li>
              <li>Interest in civil and family law</li>
              <li>Good communication skills</li>
              <li>Commitment to learning and growth</li>
              <li>Preferably having proficiency in Marathi language as well</li>
            </ul>
          </div>
          )}
          <div className="read-more" onClick={() => toggleCard('intern')}>
            <p>{expandedCards['intern'] ? '− Read Less' : '+ Read More'}</p>
          </div>
          <button className="btn-primary" onClick={() => handleApplyClick('Legal Intern')}>Apply Now</button>
        </div>

        <div className="career-card">
          <h3>Paralegal</h3>
          <div className="career-details">
            <p><strong>Experience:</strong> 1-3 years</p>
            <p><strong>Location:</strong> Navi Mumbai, Maharashtra</p>
            <p><strong>Type:</strong> Full-time</p>
          </div>
          {expandedCards['paralegal'] && (
          <div className="career-description">
            <p>We are looking for a detail-oriented Paralegal to support our legal team with administrative and research tasks.</p>
            <h4>Key Responsibilities:</h4>
            <ul>
              <li>Assist with case file management</li>
              <li>Conduct legal research</li>
              <li>Prepare and organize documents</li>
              <li>Schedule appointments and court dates</li>
              <li>Maintain client databases</li>
            </ul>
            <h4>Requirements:</h4>
            <ul>
              <li>Bachelor's degree in Law or related field</li>
              <li>1-3 years of paralegal experience</li>
              <li>Proficiency in Microsoft Office</li>
              <li>Strong organizational skills</li>
              <li>Attention to detail</li>
              <li>Preferably having proficiency in Marathi language as well</li>
            </ul>
          </div>
          )}
          <div className="read-more" onClick={() => toggleCard('paralegal')}>
            <p>{expandedCards['paralegal'] ? '− Read Less' : '+ Read More'}</p>
          </div>
          <button className="btn-primary" onClick={() => handleApplyClick('Paralegal')}>Apply Now</button>
        </div>
      </div>

      <div className="careers-benefits">
        <h2>Why Work With Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>Professional Growth</h4>
            <p>Opportunities for continuous learning and career advancement in a supportive environment.</p>
          </div>
          <div className="benefit-item">
            <h4>Mentorship</h4>
            <p>Learn from experienced advocates who are committed to your professional development.</p>
          </div>
          <div className="benefit-item">
            <h4>Diverse Practice</h4>
            <p>Work on a variety of cases across different areas of law, expanding your expertise.</p>
          </div>
        </div>
      </div>

      <div className="application-process">
        <h2>How To Apply?</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Submit Application</h4>
            <p>Send your resume and cover letter to careers@bondrelawfirm.com</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Initial Review</h4>
            <p>Our team will review your application and contact you within 5-7 business days</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Interview Process</h4>
            <p>Selected candidates will be invited for an interview with our senior team</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h4>Decision</h4>
            <p>We'll notify you of our decision and discuss next steps if selected</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Careers;
