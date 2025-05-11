// src/context/WishlistContext.jsx

import React, { createContext, useContext, useState } from 'react';

// Create a context for the wishlist
export const WishlistContext = createContext();

// The WishlistProvider that will wrap the app's components
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    if (!wishlist.find((art) => art.title === item.title)) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (title) => {
    setWishlist(wishlist.filter((art) => art.title !== title));
  };

  const purchaseItem = (item) => {
    // You can call your API to process the purchase here
    console.log(`Purchased item: ${item.title} for ${item.price}`);
    // After purchasing, remove the item from the wishlist
    removeFromWishlist(item.title);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, purchaseItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to easily access wishlist data
export const useWishlist = () => useContext(WishlistContext);
