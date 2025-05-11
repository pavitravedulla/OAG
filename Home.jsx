import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const submitReview = () => {
    if (newReview.trim() !== "") {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  return (
    <div className="home-container">
      <nav className="top-right-nav">
        <Link to="/about">About Us</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/wishlist">Wishlist</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/gallery">Gallery</Link>
      </nav>

      <div className="intro-section">
        <h1>Welcome to the Online Art Gallery</h1>
        <p>Explore, admire, and collect amazing artwork from talented artists around the world.</p>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* Static gallery section remains unchanged */}
      <div className="gallery-section">
        <div className="gallery-row">
          <img src="home-image.jpg" alt="Art 1" />
          <img src="art1.jpg" alt="Art 2" />
        </div>
        <div className="gallery-row">
          <img src="art2.jpg" alt="Art 3" />
        </div>
      </div>

      {/* Artist Portfolio Section */}
      <div className="portfolio-section">
        <h2>Artist Portfolio</h2>
        <div className="artist-card">
          <img src="home-image.jpg" alt="Artist 1" />
          <p><strong>Name:</strong> Anjali Reddy</p>
          <p><strong>Style:</strong> Abstract & Modern</p>
        </div>
        <div className="artist-card">
          <img src="art1.jpg" alt="Artist 2" />
          <p><strong>Name:</strong> Rohan Mehta</p>
          <p><strong>Style:</strong> Devotional</p>
        </div>
        <div className="artist-card">
          <img src="art2.jpg" alt="Artist 3" />
          <p><strong>Name:</strong> shankar</p>
          <p><strong>Style:</strong> Traditional</p>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="review-input">
          <textarea
            value={newReview}
            onChange={handleReviewChange}
            placeholder="Write your review here..."
          />
          <button onClick={submitReview}>Submit Review</button>
        </div>

        <div className="review-list">
          {reviews.length === 0 ? (
            <p>No reviews yet. Be the first to share!</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p>{review}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
