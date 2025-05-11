// src/App.jsx

import React from 'react';
import { WishlistProvider } from './context/WishlistContext'; // Import the provider
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Optional: for your global styles
import Home from './Pages/Home';
import Wishlist from './Pages/WishList';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import Gallery from './Pages/Gallery';
import Login from './Pages/Login'; // ✅ NEW
import Signup from './Pages/Signup'; // ✅ NEW

function App() {
  return (
    <WishlistProvider> {/* Wrap your app with WishlistProvider */}
      <Router>
        <div className="app-container">
          <nav className="navbar">
            <div className="logo">🎨 Art Gallery</div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/login">Login</Link></li> {/* ✅ NEW */}
              <li><Link to="/signup">Sign Up</Link></li> {/* ✅ NEW */}
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} /> {/* ✅ NEW */}
            <Route path="/signup" element={<Signup />} /> {/* ✅ NEW */}
          </Routes>
        </div>
      </Router>
    </WishlistProvider>
  );
}

export default App;
