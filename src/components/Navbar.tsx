import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">BookShare</h1>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li> {/* Updated Link */}
          <li><Link to="/about">About</Link></li> {/* Updated Link */}
          <li><Link to="/how-it-works">How It Works</Link></li> {/* Updated Link */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
