import './MeetOurTeam.css';

function MeetOurTeam() {
  const teamMembers = [
    {
      name: 'Adv. S. J. Bondre',
      role: 'Senior Advocate & Founder',
      designation: 'B.Com, LL.B.',
      phone: '+91 9372680574',
      email: 'adv.s.bondre@gmail.com',
      initials: 'SJB',
      description: 'He is our most senior advocate and the founder of S.J. Bondre & Co., bringing over 35 years of rich and versatile legal experience to the table! He has a wide client base and is one of the most trusted and reliable advocates in his locality. A stalwart in Real Estate and Property Law, his expertise spans across intricate property matters, conveyancing, and title verification, reflecting both depth and dynamism. He is also empanelled with several national, state, and co-operative banks, wherein he is the go-to authority for meticulous Title Search Reports and sound legal opinions.',
    },
    {
      name: 'Adv. Pradeep Nalage',
      role: 'Advocate',
      designation: 'B.Com, LL.B.',
      phone: '+91 9870889919',
      email: 'pra3nalgae@gmail.com',
      initials: 'PN',
      description: 'He has been practicing litigation across Navi Mumbai, Mumbai, and throughout Maharashtra, with experience spanning in a variety of legal matters. Some of his key areas of practice include Family Law, Inheritance Matters, Criminal Law - Bail Applications, Cheque Bounce Cases, Recovery Suits, and more. Committed to putting clients first, he approaches every case with dedication, treating it as his own and going the extra mile whenever required. In addition, he assists various banks with document vetting, preparation of legal opinions, and confirmation of authenticity as well as general overview. His zeal and commitment ensure that clients receive thorough, reliable, and effective legal support.',
    },
    {
      name: 'Adv. Pranjal Bondre',
      role: 'Junior Advocate',
      designation: 'B.L.S., LL.B.',
      phone: '+91 9372680574',
      email: 'bondrepranjal224@gmail.com',
      initials: 'PB',
      description: 'Meet our young advocate - full of dreams, drive, and dedication! She believes in helping people with honesty, transparency, and the most effective legal solutions. During her law school days, she worked alongside several experienced advocates, learning different approaches to handling cases and serving clients better. Now pursuing her LL.M., she brings fresh perspective and compassion to her practice, with growing expertise in Family Law, Consumer Law, and drafting of Title Search Reports.',
    },
    {
      name: 'Dhanashree Bondre',
      role: 'Licensed Stamp Vendor',
      designation: 'B.Com',
      phone: '+91 9324322716',
      email: 'dbondre2@gmail.com',
      initials: 'DB',
      description: 'Our ever-reliable Licensed Stamp Vendor has been serving clients since 1996! With nearly three decades of experience, she stands as one of the most dedicated and trusted persons in our locality for providing Non-Judicial Stamp Papers for everyday legal needs. Known for her efficiency and warm approach, she truly keeps the administrative side of our work running seamlessly. Please call ahead to confirm stamp paper availability, as supply may vary.',
    },
    {
      name: 'Sakshi Sakpal',
      role: 'Legal Assistant',
      designation: 'N/A',
      phone: 'N/A',
      email: 'N/A',
      initials: 'SS',
      description: 'One of our oldest and most committed team members, she has been a part of our firm for over a decade. With 10+ years of experience, she plays a vital role in drafting and researching Title Search Reports and Legal Opinions for various banks and individual clients. She is also well-versed in the preparation and vetting of legal documents, agreements, and affidavits, ensuring every detail aligns with statutory requirements. Her precision, consistency, and deep understanding of legal documentation make her an invaluable part of our team.',
    },
    {
      name: 'Shreeya Borle',
      role: 'Legal Assistant',
      designation: 'N/A',
      phone: 'N/A',
      email: 'N/A',
      initials: 'SB',
      description: 'From drafting a wide range of documents, affidavits, and agreements, required on a day-to-day basis, to being proficient in both English and Marathi typing. She serves as the primary point of contact for stamp paper assistance, while ensuring quick coordination with our Stamp Vendor and smooth handling of every request. Known for her warm and helpful nature, she ensures that every document and stamp paper request is managed seamlessly.',
    },
    {
      name: 'Digambar Bobade',
      role: 'Registration Assistant',
      designation: 'N/A',
      phone: 'N/A',
      email: 'N/A',
      initials: 'DB',
      description: "He manages our registration work before the Sub-Registrar, whether it's a flat, vehicle, power of attorney, gift deed, or even a simple rent agreement - he's got you covered! He also ensures seamless processing of Certified Copies for all required documents. For clarity and guidance on the process, kindly consult Adv. S. J. Bondre first, after which you will be directed further.",
    },
    {
      name: 'Abhinav Khatal',
      role: 'Office Assistant',
      designation: 'N/A',
      phone: 'N/A',
      email: 'N/A',
      initials: 'AK',
      description: 'He provides comprehensive assistance in various office tasks, including registration work and obtaining Certified Copies of important documents. In addition, he supports stamp paper-related processes and at times contributes in drafting certain Affidavits. His versatile support ensures that day-to-day office and client-related tasks run smoothly and efficiently.',
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
            <h3>
              {member.name === 'Dhanashree Bondre' ? (
                <a href="https://share.google/ncEunOL5hOqosqhRL" target="_blank" rel="noopener noreferrer">
                  {member.role}
                </a>
              ) : (
                member.role
              )}
            </h3>
            {member.designation !== 'N/A' && <p>{member.designation}</p>}
            {member.description && <p className="team-description">{member.description}</p>}
            {member.phone !== 'N/A' && <p><a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a></p>}
            {member.email !== 'N/A' && <p><a href={`mailto:${member.email}`}>{member.email}</a></p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeetOurTeam;
