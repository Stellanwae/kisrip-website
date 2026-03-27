import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Data protection in accordance with the Kenya Data Protection Act, 2019</p>
        </div>
      </div>
      
      <div className="container">
        <div style={{ background: 'white', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <h2>1. Introduction</h2>
          <p>The Ministry of Lands, Housing and Urban Development is committed to protecting your privacy and personal information in accordance with the Kenya Data Protection Act, 2019.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us through our contact forms, including name, email address, and any other information you choose to provide.</p>
          
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to respond to inquiries, provide services, and improve our website functionality.</p>
          
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
          
          <h2>5. Your Rights</h2>
          <p>Under the Data Protection Act, you have the right to access, correct, and request deletion of your personal data.</p>
          
          <h2>6. Contact Us</h2>
          <p>For privacy-related inquiries, contact our Data Protection Officer at: dpo@housing.go.ke</p>
          
          <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: '#666' }}>
            Last updated: January 1, 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;