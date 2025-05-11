// src/Pages/WishList.jsx

import React from 'react';
import { useWishlist } from '../context/WishlistContext'; // Import the context
import './Wishlist.css';

const Wishlist = () => {
  const { wishlist, purchaseItem } = useWishlist();

  const handlePurchase = (item) => {
    purchaseItem(item);
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty. Add some items to your wishlist!</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((item, index) => (
            <div key={index} className="wishlist-item">
              <img
                src={item.image}
                alt={item.title}
                className="wishlist-item-image"
                style={{ width: '100%', height: '350px' }} // Making images bigger
              />
              <div className="wishlist-item-details">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
                <button className="buy-now" onClick={() => handlePurchase(item)}>
                  Buy Now
                </button>
                <button ClassName="remove-button"onClick={()=>removeFromWishlist(item.title)}>
                  remove
                  </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
