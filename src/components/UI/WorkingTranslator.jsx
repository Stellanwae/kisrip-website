// import React from 'react';

// const WorkingTranslator = () => {
//   const openGoogleTranslate = () => {
//     // This opens Google Translate with the current page
//     window.open('https://translate.google.com/translate?sl=en&tl=sw&u=' + encodeURIComponent(window.location.href), '_blank');
//   };

//   return (
//     <button 
//       onClick={openGoogleTranslate}
//       style={{
//         background: '#63921F',
//         border: 'none',
//         color: 'white',
//         padding: '8px 16px',
//         borderRadius: '4px',
//         cursor: 'pointer',
//         fontWeight: 'bold'
//       }}
//     >
//       🇰🇪 View in Kiswahili
//     </button>
//   );
// };

// export default WorkingTranslator;



import React, { useState, useEffect } from 'react';

const WorkingTranslator = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  // Check if we're coming back from Google Translate
  useEffect(() => {
    // If the URL has a 'fromTranslate' parameter, we're returning from translation
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('fromTranslate') === 'true') {
      setIsTranslated(false);
      // Clean up the URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const translateToSwahili = () => {
    const currentUrl = window.location.href;
    // Add a parameter to know we're coming back
    const returnUrl = currentUrl + (currentUrl.includes('?') ? '&' : '?') + 'fromTranslate=true';
    const translateUrl = `https://translate.google.com/translate?sl=en&tl=sw&u=${encodeURIComponent(returnUrl)}`;
    
    // Open in same tab
    window.location.href = translateUrl;
  };

  const translateToEnglish = () => {
    // Go back to original page
    window.location.href = window.location.pathname;
  };

  return (
    <button 
      onClick={isTranslated ? translateToEnglish : translateToSwahili}
      style={{
        background: '#63921F',
        border: 'none',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <span>{isTranslated ? '🇬🇧' : '🇰🇪'}</span> 
      <span>{isTranslated ? 'Back to English' : 'View in Kiswahili'}</span>
    </button>
  );
};

export default WorkingTranslator;