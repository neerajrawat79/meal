// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaInfoCircle, FaShoppingCart, FaClipboardList } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>MealApp</h1>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          Home
        </Link>
        <Link to="/menu" className="sidebar-link">
          <FaUtensils className="sidebar-icon" />
          Menu
        </Link>
        <Link to="/aboutme" className="sidebar-link">
          <FaInfoCircle className="sidebar-icon" />
          About Me
        </Link>
        <Link to="/cart" className="sidebar-link">
          <FaShoppingCart className="sidebar-icon" />
          Cart
        </Link>
        <Link to="/myorders" className="sidebar-link">
          <FaClipboardList className="sidebar-icon" />
          My Orders
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
