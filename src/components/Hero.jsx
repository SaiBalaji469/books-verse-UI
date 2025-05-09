import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const HERO_BOOK_IMAGE = 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg'; // Rich Dad Poor Dad book cover

const Hero = () => {
  const headlineRef = useRef(null);
  const subheadingRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Add animation classes after component mounts
    setTimeout(() => {
      if (headlineRef.current) {
        headlineRef.current.classList.add('animated');
      }
    }, 300);

    setTimeout(() => {
      if (subheadingRef.current) {
        subheadingRef.current.classList.add('animated');
      }
    }, 500);

    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.classList.add('animated');
      }
    }, 700);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={headlineRef} className="hero-headline">
            Find Your Next Great Read
          </h1>
          <p ref={subheadingRef} className="hero-subheading">
            Discover worlds, ideas, and stories that will transport you to places you've never been.
          </p>
          <button ref={ctaRef} className="hero-cta">
            Shop Now
          </button>
        </div>
        <div className="hero-image">
          <div className="book-stack">
            <div className="book book-1">
              <img src={HERO_BOOK_IMAGE} alt="Book Cover" className="hero-book-img" />
            </div>
            <div className="book book-2"></div>
            <div className="book book-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;