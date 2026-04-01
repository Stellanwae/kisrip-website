import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import './styles/accessibility.css'
import App from './App'

// Add skip to main content link for screen readers
// const skipLink = document.createElement('a')
// skipLink.href = '#main-content'
// skipLink.className = 'skip-to-content'
// skipLink.textContent = 'Skip to main content'
// document.body.insertBefore(skipLink, document.body.firstChild)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)