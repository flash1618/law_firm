import './MeetOurTeam.css';

function MeetOurTeam() {
  const teamMembers = [
    {
      name: 'Adv S. J. Bondre',
      role: 'Senior Advocate',
      designation: 'B.com, LLB',
      phone: '+91 9322593358',
      email: 'adv.s.bondre@gmail.com',
      initials: 'SJB',
    },
    {
      name: 'Adv. Pradeep Nalage',
      role: 'Advocate',
      designation: 'B.com, LLB',
      phone: '+91 9870889919',
      email: 'pra3nalgae@gmail.com',
      initials: 'PN',
    },
    {
      name: 'Adv. Pranjal Bondre',
      role: 'Junior Advocate',
      designation: 'BLS, LLB',
      phone: '+91 9372680574',
      email: 'bondrepranjal224@gmail.com',
      initials: 'PB',
    },
    {
      name: 'Dhanashree Bondre',
      role: 'Stamp Vendor',
      designation: 'B.com',
      phone: '+91 9324322716',
      email: 'dbondre2@gmail.com',
      initials: 'DB',
    },
    {
      name: 'Sakshi Madam',
      role: 'N/A',
      designation: 'N/A',
      phone: 'N/A',
      email: 'N/A',
      initials: 'SM',
    },
    {
      name: 'Pranali',
      role: 'N/A',
      designation: 'N/A',
      phone: 'N/A',
      email: 'N/A',
      initials: 'P',
    },
  ];

  return (
    <div className="meet-our-team-container main-content-container">
      <h1>Meet Our Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-card-image">{member.initials}</div>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.designation}</p>
            {member.phone !== 'N/A' && <p><a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a></p>}
            {member.email !== 'N/A' && <p><a href={`mailto:${member.email}`}>{member.email}</a></p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetOurTeam;
