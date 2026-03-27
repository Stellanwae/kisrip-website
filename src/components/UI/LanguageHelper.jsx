import React, { useState, useEffect } from 'react';

const LanguageHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwahili, setIsSwahili] = useState(false);
  const [googleTranslateReady, setGoogleTranslateReady] = useState(false);

  useEffect(() => {
    // Check if Google Translate is loaded
    const checkGoogleTranslate = setInterval(() => {
      if (window.google && window.google.translate) {
        setGoogleTranslateReady(true);
        clearInterval(checkGoogleTranslate);
      }
    }, 500);

    // Check if page was previously translated
    const savedLang = localStorage.getItem('translatedToSwahili');
    if (savedLang === 'true') {
      setTimeout(() => {
        translateToSwahili();
      }, 1000);
    }

    return () => clearInterval(checkGoogleTranslate);
  }, []);

  const translateToSwahili = () => {
    try {
      // Method 1: Find and trigger the Google Translate select element
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = 'sw';
        select.dispatchEvent(new Event('change'));
        setIsSwahili(true);
        localStorage.setItem('translatedToSwahili', 'true');
        
        // Show success message
        showNotification('Page is being translated to Kiswahili...');
      } else {
        // Method 2: Alternative approach - trigger via Google Translate API
        if (window.google && window.google.translate) {
          // Force translation
          const frame = document.querySelector('.goog-te-menu-frame');
          if (frame && frame.contentDocument) {
            const select2 = frame.contentDocument.querySelector('.goog-te-combo');
            if (select2) {
              select2.value = 'sw';
              select2.dispatchEvent(new Event('change'));
              setIsSwahili(true);
              localStorage.setItem('translatedToSwahili', 'true');
              showNotification('Page is being translated to Kiswahili...');
            }
          }
        } else {
          showNotification('Please wait a moment for Google Translate to load...');
        }
      }
    } catch (error) {
      console.error('Translation error:', error);
      showNotification('Translation feature is loading. Please try again in a moment.');
    }
  };

  const translateToEnglish = () => {
    try {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = '';
        select.dispatchEvent(new Event('change'));
        setIsSwahili(false);
        localStorage.setItem('translatedToSwahili', 'false');
        showNotification('Switched back to English');
      }
    } catch (error) {
      console.error('Reset error:', error);
    }
  };

  const toggleLanguage = () => {
    if (isSwahili) {
      translateToEnglish();
    } else {
      translateToSwahili();
    }
    setIsOpen(false);
  };

  const showNotification = (message) => {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #1a472a;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      font-size: 14px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  // Add animation styles
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => style.remove();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="language-switch"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language options"
        style={{
          background: isSwahili ? '#ff8c42' : 'transparent',
          border: '1px solid white',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          transition: 'all 0.3s'
        }}
      >
        {isSwahili ? '🇰🇪 Kiswahili' : '🌐 Language'}
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          background: 'white',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          padding: '8px',
          minWidth: '220px',
          zIndex: 1000,
          marginTop: '8px'
        }}>
          <button
            onClick={toggleLanguage}
            style={{
              width: '100%',
              padding: '10px',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            <span>{isSwahili ? '🇬🇧' : '🇰🇪'}</span>
            <span>{isSwahili ? 'Switch to English' : 'Translate to Kiswahili'}</span>
          </button>
          
          <div style={{ 
            padding: '8px', 
            fontSize: '11px', 
            color: '#666',
            borderTop: '1px solid #eee',
            marginTop: '5px',
            textAlign: 'center'
          }}>
            Powered by Google Translate
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageHelper;