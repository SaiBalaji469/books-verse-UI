import React from 'react';
import { useEffect, useRef } from 'react';
import '../styles/GenreSection.css';

const genres = [
  {
    id: 1,
    name: 'Fiction',
    icon: '📚',
    color: '#3b82f6',
  },
  {
    id: 2,
    name: 'Sci-Fi',
    icon: '🚀',
    color: '#8b5cf6',
  },
  {
    id: 3,
    name: 'Mystery',
    icon: '🔍',
    color: '#ec4899',
  },
  {
    id: 4,
    name: 'Romance',
    icon: '❤️',
    color: '#ef4444',
  },
  {
    id: 5,
    name: 'Fantasy',
    icon: '🧙‍♂️',
    color: '#10b981',
  },
  {
    id: 6,
    name: 'History',
    icon: '⏳',
    color: '#f59e0b',
  },
  {
    id: 7,
    name: 'Biography',
    icon: '👤',
    color: '#6366f1',
  },
  {
    id: 8,
    name: 'Children',
    icon: '🧸',
    color: '#14b8a6',
  }
];

const GenreSection = () => {
  const sectionRef = useRef(null);
  const genreRefs = useRef([]);

  useEffect(() => {
    genreRefs.current = genreRefs.current.slice(0, genres.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    genreRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      genreRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="genres" className="genre-section" ref={sectionRef}>
      <div className="container">
        <h1 className="main-genre-heading section-title text-center" style={{marginBottom: '0.5em'}}>Explore Book Genres</h1>
        <h2 className="section-title text-center hidden" ref={(el) => (sectionRef.current = el)}>
          Browse by Genre
        </h2>
        <div className="genres-grid">
          {genres.map((genre, index) => (
            <div 
              key={genre.id} 
              className="genre-card hidden"
              ref={(el) => (genreRefs.current[index] = el)}
              style={{ '--genre-color': genre.color }}
            >
              <div className="genre-icon">{genre.icon}</div>
              <h3 className="genre-name">{genre.name}</h3>
              <div className="genre-overlay">
                <span>Explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenreSection;