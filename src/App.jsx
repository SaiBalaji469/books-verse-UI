import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import GenreSection from './components/GenreSection';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Smooth scroll to section when clicking navigation links
    const handleNavClick = (e) => {
      if (e.target.hasAttribute('data-scroll')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    
    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
        <GenreSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;