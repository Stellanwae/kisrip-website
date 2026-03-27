import React, { useState, useEffect } from 'react'

const AccessibilityToolbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [dyslexiaFriendly, setDyslexiaFriendly] = useState(false)

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedContrast = localStorage.getItem('highContrast')
    const savedText = localStorage.getItem('largeText')
    const savedDyslexia = localStorage.getItem('dyslexiaFriendly')
    
    if (savedContrast === 'true') {
      setHighContrast(true)
      document.body.classList.add('high-contrast')
    }
    if (savedText === 'true') {
      setLargeText(true)
      document.body.classList.add('large-text')
    }
    if (savedDyslexia === 'true') {
      setDyslexiaFriendly(true)
      document.body.classList.add('dyslexia-friendly')
    }
  }, [])

  useEffect(() => {
    // Apply or remove high contrast
    if (highContrast) {
      document.body.classList.add('high-contrast')
      localStorage.setItem('highContrast', 'true')
    } else {
      document.body.classList.remove('high-contrast')
      localStorage.setItem('highContrast', 'false')
    }
  }, [highContrast])

  useEffect(() => {
    // Apply or remove large text
    if (largeText) {
      document.body.classList.add('large-text')
      localStorage.setItem('largeText', 'true')
    } else {
      document.body.classList.remove('large-text')
      localStorage.setItem('largeText', 'false')
    }
  }, [largeText])

  useEffect(() => {
    // Apply or remove dyslexia friendly font
    if (dyslexiaFriendly) {
      document.body.classList.add('dyslexia-friendly')
      localStorage.setItem('dyslexiaFriendly', 'true')
    } else {
      document.body.classList.remove('dyslexia-friendly')
      localStorage.setItem('dyslexiaFriendly', 'false')
    }
  }, [dyslexiaFriendly])

  const resetAccessibility = () => {
    setHighContrast(false)
    setLargeText(false)
    setDyslexiaFriendly(false)
  }

  // Close toolbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const toolbar = document.querySelector('.accessibility-toolbar')
      if (toolbar && !toolbar.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  return (
    <div className="accessibility-toolbar">
      <button 
        className="accessibility-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility options"
        title="Accessibility options"
        aria-expanded={isOpen}
      >
        <span aria-hidden="true">♿</span>
      </button>
      
      {isOpen && (
        <div className="accessibility-menu">
          <h3>Accessibility Options</h3>
          
          <button 
            className={`accessibility-option ${highContrast ? 'active' : ''}`}
            onClick={() => setHighContrast(!highContrast)}
            aria-pressed={highContrast}
          >
            <span className="option-icon">🎨</span>
            <span className="option-text">High Contrast</span>
            {highContrast && <span className="checkmark">✓</span>}
          </button>
          
          <button 
            className={`accessibility-option ${largeText ? 'active' : ''}`}
            onClick={() => setLargeText(!largeText)}
            aria-pressed={largeText}
          >
            <span className="option-icon">🔤</span>
            <span className="option-text">Larger Text</span>
            {largeText && <span className="checkmark">✓</span>}
          </button>
          
          <button 
            className={`accessibility-option ${dyslexiaFriendly ? 'active' : ''}`}
            onClick={() => setDyslexiaFriendly(!dyslexiaFriendly)}
            aria-pressed={dyslexiaFriendly}
          >
            <span className="option-icon">📖</span>
            <span className="option-text">Dyslexia Friendly</span>
            {dyslexiaFriendly && <span className="checkmark">✓</span>}
          </button>
          
          <button 
            className="accessibility-reset"
            onClick={resetAccessibility}
          >
            Reset All Settings
          </button>
        </div>
      )}
    </div>
  )
}

export default AccessibilityToolbar