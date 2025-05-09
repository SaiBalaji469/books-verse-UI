import React from 'react';
import { useEffect, useRef } from 'react';
import '../styles/FeaturedBooks.css';

const books = [
  {
    id: 1,
    title: 'The Lost City',
    author: 'Emily Lawrence',
    price: 'Rs. 1,499',
    imageUrl: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#2563eb',
  },
  {
    id: 2,
    title: 'Midnight Dreams',
    author: 'Robert Chen',
    price: 'Rs. 1,699',
    imageUrl: 'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'The Art of Silence',
    author: 'Maria Jones',
    price: 'Rs. 1,999',
    imageUrl: 'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#0369a1',
  },
  {
    id: 4,
    title: 'Beyond the Horizon',
    author: 'James Wilson',
    price: 'Rs. 1,299',
    imageUrl: 'https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#15803d',
  },
  {
    id: 5,
    title: 'Echoes of Time',
    author: 'Sarah Miller',
    price: 'Rs. 1,799',
    imageUrl: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#b91c1c',
  },
  {
    id: 6,
    title: 'Whispering Pines',
    author: 'Daniel Black',
    price: 'Rs. 1,199',
    imageUrl: 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: '#c2410c',
  },
  {
    id: 7,
    title: 'The God of Small Things',
    author: 'Arundhati Roy',
    price: 'Rs. 499',
    imageUrl: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    color: '#8d4a2f',
  },
  {
    id: 8,
    title: 'Train to Pakistan',
    author: 'Khushwant Singh',
    price: 'Rs. 399',
    imageUrl: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    color: '#3b3a30',
  },
];

const FeaturedBooks = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const booksRefs = useRef([]);

  useEffect(() => {
    booksRefs.current = booksRefs.current.slice(0, books.length);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    booksRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }

      booksRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="featured" className="featured-books" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title text-center hidden" ref={titleRef}>
          Featured Books
        </h2>
        <div className="books-grid">
          {books.map((book, index) => (
            <div 
              key={book.id}
              className="book-card hidden"
              ref={(el) => (booksRefs.current[index] = el)}
              style={{ '--card-accent-color': book.color }}
            >
              <div className="book-cover">
                <img src={book.imageUrl} alt={book.title} />
                <div className="book-overlay">
                  <button className="preview-btn">Quick View</button>
                </div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <div className="book-price-row">
                  <span className="book-price">{book.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;