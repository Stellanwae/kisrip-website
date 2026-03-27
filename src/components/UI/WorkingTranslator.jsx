import React from 'react';

const WorkingTranslator = () => {
  const openGoogleTranslate = () => {
    // This opens Google Translate with the current page
    window.open('https://translate.google.com/translate?sl=en&tl=sw&u=' + encodeURIComponent(window.location.href), '_blank');
  };

  return (
    <button 
      onClick={openGoogleTranslate}
      style={{
        background: '#ff8c42',
        border: 'none',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}
    >
      🇰🇪 View in Kiswahili
    </button>
  );
};

export default WorkingTranslator;