// Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="hero-text">
          <h1>Welcome to Our Meal Store</h1>
          <p>Discover delicious meals from around the world!</p>
        </div>
      </div>
      <div className="home-content">
        <h2>Featured Meals</h2>
        <div className="home-featured-meals">
          {/* Sample featured meals. Replace these with dynamic data if needed */}
          <div className="meal-card">
            <img src="https://www.themealdb.com/images/media/meals/1529444830.jpg" alt="Meal" />
            <h3>Beef Wellington</h3>
          </div>
          <div className="meal-card">
            <img src="https://www.themealdb.com/images/media/meals/1548772327.jpg" alt="Meal" />
            <h3>Chicken Alfredo</h3>
          </div>
          <div className="meal-card">
            <img src="https://www.themealdb.com/images/media/meals/1529443236.jpg" alt="Meal" />
            <h3>Spaghetti Bolognese</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
