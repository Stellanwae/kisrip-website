import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AccessibilityToolbar from '../UI/AccessibilityToolbar';
import WorkingTranslator from '../UI/WorkingTranslator';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <AccessibilityToolbar />
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">
            <div className="logo-content">
              {/* Optional: Add coat of arms image when you have it */}
              {/* <img 
                src="/images/kenya-coat-of-arms.png" 
                alt="Kenya Coat of Arms" 
                className="coat-of-arms"
                width="50"
                height="50"
              /> */}
              <div>
                <h1>Kenya Informal </h1>
                <p>Settlements Redevelopment Programme</p>
                <span className="initiative-name">Ministry of Lands, Housing and Urban Development</span>
              </div>
            </div>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Menu"
          >
            <span aria-hidden="true">☰</span>
          </button>
          
          <nav aria-label="Main navigation">
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <li><Link to="/" aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link></li>
              <li><Link to="/projects" aria-current={location.pathname === '/projects' ? 'page' : undefined}>Projects</Link></li>
              <li><Link to="/news" aria-current={location.pathname === '/news' ? 'page' : undefined}>News</Link></li>
              <li><Link to="/reports" aria-current={location.pathname === '/reports' ? 'page' : undefined}>Reports</Link></li>
              <li><Link to="/about" aria-current={location.pathname === '/about' ? 'page' : undefined}>About</Link></li>
              <li><Link to="/contact" aria-current={location.pathname === '/contact' ? 'page' : undefined}>Contact</Link></li>
              <li>
                <WorkingTranslator />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;