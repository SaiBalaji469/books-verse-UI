import React, { useEffect, useRef } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would handle form submission
    alert('Thank you for subscribing!');
  };

  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <div className="newsletter-container hidden" ref={sectionRef}>
          <div className="newsletter-content">
            <h2 className="section-title">Join Our Book Club</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter and get exclusive offers, reading recommendations, and updates on new releases.
            </p>
          </div>
          
          <form className="newsletter-form hidden" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your email address" 
                required 
                className="form-input"
              />
            </div>
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;