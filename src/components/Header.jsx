import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#hero">
            <span className="book-icon">📚</span>
            <span className="logo-text">BookVerse</span>
          </a>
        </div>
        
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" data-scroll onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#featured" data-scroll onClick={() => setIsMobileMenuOpen(false)}>Featured</a></li>
            <li><a href="#genres" data-scroll onClick={() => setIsMobileMenuOpen(false)}>Genres</a></li>
            <li><a href="#testimonials" data-scroll onClick={() => setIsMobileMenuOpen(false)}>Reviews</a></li>
            <li><a href="#newsletter" data-scroll onClick={() => setIsMobileMenuOpen(false)}>Subscribe</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;