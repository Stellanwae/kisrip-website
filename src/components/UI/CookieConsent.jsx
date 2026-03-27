import React from 'react'
import CookieConsent from 'react-cookie-consent'

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="government-website-consent"
      style={{ background: '#1a472a', padding: '15px', zIndex: 9999 }}
      buttonStyle={{ background: '#ff8c42', color: 'white', fontWeight: 'bold', borderRadius: '4px' }}
      declineButtonStyle={{ background: '#666', color: 'white', borderRadius: '4px' }}
      enableDeclineButton
      expires={365}
    >
      This website uses cookies to improve your experience. By continuing to use this site, 
      you agree to our use of cookies in accordance with the Kenya Data Protection Act, 2019.
      <a href="/privacy-policy" style={{ color: '#ff8c42', marginLeft: '10px' }}>
        Learn more
      </a>
    </CookieConsent>
  )
}

export default CookieConsentBanner