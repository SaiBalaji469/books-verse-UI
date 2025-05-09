import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "BookVerse has completely transformed my reading experience. Their curated selections are top-notch, and I've discovered authors I never would have found otherwise.",
    author: "Sarah Johnson",
    location: "New York, NY",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    text: "As an avid reader, I appreciate BookVerse's attention to detail and personalized recommendations. Their customer service is exceptional too!",
    author: "Michael Chen",
    location: "Seattle, WA",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    text: "I've been a BookVerse member for over a year now, and each book has been a delight. The subscription service is worth every penny.",
    author: "Emily Rodriguez",
    location: "Austin, TX",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const testimonialRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    testimonialRefs.current = testimonialRefs.current.slice(0, testimonials.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    testimonialRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      testimonialRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="container testimonials-container hidden" ref={containerRef}>
        <h2 className="section-title text-center">
          What Our Readers Say
        </h2>
        <div className="testimonials-slider">
          <div 
            className="testimonials-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card hidden"
                ref={(el) => (testimonialRefs.current[index] = el)}
              >
                <div className="quote-mark">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="author-avatar" 
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-location">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;