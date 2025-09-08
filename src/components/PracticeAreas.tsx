import './PracticeAreas.css';

function PracticeAreas() {
  return (
    <div className="practice-areas-container">
      <h1>Our Practice Areas</h1>
      <div className="practice-areas-grid">
        <div className="practice-area-card">
          <h2>Family Law</h2>
          <ul>
            <li>Divorce by Mutual Consent</li>
            <li>Contested Divorce</li>
            <li>Domestic Violence</li>
          </ul>
        </div>
        <div className="practice-area-card">
          <h2>Property & Real Estate Law</h2>
          <ul>
            <li>Registration of Flats, Shops, Land</li>
            <li>Title Search & Reports for Banks/Individuals</li>
            <li>Notice of Intimation</li>
          </ul>
        </div>
        <div className="practice-area-card">
          <h2>Testamentary & Intestate Law</h2>
          <ul>
            <li>Wills & Gift Deeds</li>
            <li>Succession Certificates</li>
          </ul>
        </div>
        <div className="practice-area-card other-services-card">
          <h2>Other Services</h2>
          <ul>
            <li>Consumer Protection Cases</li>
            <li>Cheque Bounce Cases (N.I. Act)</li>
            <li>Legal Drafting & Notices</li>
            <li>Co-operative Housing Society Law</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PracticeAreas;
