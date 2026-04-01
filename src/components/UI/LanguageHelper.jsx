import React, { useState, useEffect } from 'react';

const LanguageHelper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSwahili, setIsSwahili] = useState(false);

  useEffect(() => {
    // Add hidden Google Translate element to DOM if not already there
    if (!document.getElementById('google_translate_element')) {
      const el = document.createElement('div');
      el.id = 'google_translate_element';
      el.style.display = 'none';
      document.body.appendChild(el);
    }

    // Define the init callback Google Translate will call
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'sw,en',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Inject Google Translate script if not already injected
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src =
        'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Restore previous language preference
    const savedLang = localStorage.getItem('translatedToSwahili');
    if (savedLang === 'true') {
      const tryRestore = setInterval(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = 'sw';
          select.dispatchEvent(new Event('change'));
          setIsSwahili(true);
          clearInterval(tryRestore);
        }
      }, 500);
    }

    // Suppress Google Translate banner/iframe jank
    const style = document.createElement('style');
    style.id = 'gt-custom-style';
    style.textContent = `
      .goog-te-banner-frame, .skiptranslate { display: none !important; }
      body { top: 0px !important; }
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to   { transform: translateX(0);    opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0);    opacity: 1; }
        to   { transform: translateX(100%); opacity: 0; }
      }
    `;
    if (!document.getElementById('gt-custom-style')) {
      document.head.appendChild(style);
    }
  }, []);

  const triggerTranslation = (langCode) => {
    const attempt = (retries = 0) => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event('change'));
      } else if (retries < 10) {
        setTimeout(() => attempt(retries + 1), 400);
      } else {
        showNotification('Google Translate could not load. Please check your connection.');
      }
    };
    attempt();
  };

  const translateToSwahili = () => {
    triggerTranslation('sw');
    setIsSwahili(true);
    localStorage.setItem('translatedToSwahili', 'true');
    setIsOpen(false);
    showNotification('Translating page to Kiswahili...');
  };

  const translateToEnglish = () => {
    triggerTranslation('en');
    setIsSwahili(false);
    localStorage.setItem('translatedToSwahili', 'false');
    setIsOpen(false);
    showNotification('Switched back to English');
  };

  const toggleLanguage = () => {
    if (isSwahili) {
      translateToEnglish();
    } else {
      translateToSwahili();
    }
  };

  const showNotification = (message) => {
    const existing = document.getElementById('lang-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'lang-notification';
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

  return (
    <div style={{ position: 'relative' }}>
      <button
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
          transition: 'all 0.3s',
        }}
      >
        {isSwahili ? '🇰🇪 Kiswahili' : '🌐 Language'}
      </button>

      {isOpen && (
        <div
          style={{
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
            marginTop: '8px',
          }}
        >
          <button
            onClick={isSwahili ? translateToEnglish : translateToSwahili}
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
          >
            <span>{isSwahili ? '🇬🇧' : '🇰🇪'}</span>
            <span>{isSwahili ? 'Switch to English' : 'Translate to Kiswahili'}</span>
          </button>

          <div
            style={{
              padding: '8px',
              fontSize: '11px',
              color: '#666',
              borderTop: '1px solid #eee',
              marginTop: '5px',
              textAlign: 'center',
            }}
          >
            Powered by Google Translate
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageHelper;