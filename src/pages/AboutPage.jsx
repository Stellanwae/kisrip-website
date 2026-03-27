import React from 'react';

const AboutPage = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Our mission, vision, and commitment to transforming informal settlements</p>
        </div>
      </div>
      
      <div className="container">
        <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <h2>Our Mission</h2>
          <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
            To transform informal settlements into sustainable, inclusive, and resilient communities through 
            innovative housing solutions, infrastructure development, and community empowerment.
          </p>
          
          <h2>Our Vision</h2>
          <p style={{ marginBottom: '2rem', lineHeight: '1.8' }}>
            A Kenya where every citizen has access to adequate, safe, and affordable housing in well-planned 
            urban environments that promote dignity, opportunity, and sustainable development.
          </p>
          
          <h2>Our Approach</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
            <div>
              <h3>Community-Led</h3>
              <p>Working with residents to ensure their needs and aspirations guide our projects.</p>
            </div>
            <div>
              <h3>Sustainable</h3>
              <p>Implementing environmentally friendly solutions for long-term resilience.</p>
            </div>
            <div>
              <h3>Inclusive</h3>
              <p>Ensuring benefits reach all community members, especially the most vulnerable.</p>
            </div>
            <div>
              <h3>Transparent</h3>
              <p>Maintaining open communication and accountability in all our operations.</p>
            </div>
          </div>
          
          <h2 style={{ marginTop: '2rem' }}>Key Achievements</h2>
          <ul style={{ marginTop: '1rem', marginLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>Successfully completed Mukuru renewal project benefiting 25,000+ families</li>
            <li>Constructed over 10,000 new housing units across Nairobi and Mombasa</li>
            <li>Implemented infrastructure improvements in 5 major settlements</li>
            <li>Established community health centers in 3 settlements</li>
            <li>Created over 5,000 jobs through construction and community programs</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;