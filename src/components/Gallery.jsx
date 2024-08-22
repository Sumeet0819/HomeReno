import React, { useState } from 'react';
import './Gallery.css';
import AboutUs from './AboutUs';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const posts = [
    { id: 1, category: 'Painting', img: require('../images/House (2).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 7, category: 'Painting', img: require('../images/House (8).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 8, category: 'Painting', img: require('../images/House (9).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 9, category: 'Painting', img: require('../images/House (10).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, category: 'Carpentry', img: require('../images/House (3).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 3, category: 'Roofing', img: require('../images/House (4).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 4, category: 'Interior Design', img: require('../images/House (5).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 5, category: 'Smart Homes', img: require('../images/House (6).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 6, category: 'Structural Repairs', img: require('../images/House (7).jpg'), description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <div className="gallery-container">
        <div className="tagline-text gallery">
          <span>
            <h1>Gallery</h1>
            <p id='g'></p>
            <p>Make your space pop with a vibrant makeover. Our top-notch renovation services turn your vision into reality, making every corner of your home as lit as your imagination 🔥💫.</p>
          </span>
        </div>
        <div className="bar">
          <div className="bar-item">
            <li onClick={() => setSelectedCategory('All')}>All</li>
            <li onClick={() => setSelectedCategory('Painting')}>Painting</li>
            <li onClick={() => setSelectedCategory('Carpentry')}>Carpentry</li>
            <li onClick={() => setSelectedCategory('Roofing')}>Roofing</li>
            <li onClick={() => setSelectedCategory('Interior Design')}>Interior Design</li>
            <li onClick={() => setSelectedCategory('Smart Homes')}>Smart Homes</li>
            <li onClick={() => setSelectedCategory('Structural Repairs')}>Structural Repairs</li>
          </div>
        </div>
        <div className="post">
          {filteredPosts.map(post => (
            <div key={post.id} className="post-box">
              <img src={post.img} alt="Loading" className='post-img' />
              <h2 className="category">{post.category}</h2>
              <p className="post-description">{post.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <AboutUs />
      </div>
    </>
  );
}
