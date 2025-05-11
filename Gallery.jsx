// src/Pages/Gallery.jsx

import React from 'react';
import { useWishlist } from '../context/WishlistContext'; // Import the WishlistContext
import './Gallery.css'; // Optional: for styling

function Gallery() {
  const { addToWishlist } = useWishlist();

  const artworks = [
    {
      title: 'Radha Krishna',
      image: '/art10.jpg',
      price: '₹2,500',
    },
    {
      title: 'Starry Night',
      image: '/art8.jpg',
      price: '₹3,200',
    },
    {
      title: 'Dome Of Rock',
      image: '/art6.jpg',
      price: '₹1,800',
    },
    {
      title: 'Paper Girl',
      image: '/art12.jpg',
      price: '₹3,800',
    },
    {
      title: 'The Piece',
      image: '/art13.jpg',
      price: '₹1,900',
    },
    {
      title: 'sclupture',
      image: '/art14.jpg',
      price: '₹1,800',
    },
    {
      title: 'The Silenece',
      image: '/art15.jpg',
      price: '₹17,00',
    },
  ];

  return (
    <div className="gallery-container">
      <h2>Art Gallery</h2>
      <div className="artwork-grid">
        {artworks.map((art, index) => (
          <div key={index} className="artwork-card">
            <img src={art.image} alt={art.title} className="artwork-image" />
            <h3>{art.title}</h3>
            <p className="price">{art.price}</p>
            <button
              className="add-to-wishlist"
              onClick={() => addToWishlist(art)}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
