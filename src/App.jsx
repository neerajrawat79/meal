import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import AboutMe from './pages/AboutMe';
import Cart from './components/Cart';
import MyOrders from './pages/MyOrders';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (meal) => {
    const existingItem = cartItems.find(item => item.idMeal === meal.idMeal);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.idMeal === meal.idMeal ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...meal, quantity: 1 }]);
    }
  };

  const addToOrders = (order) => {
    setOrders([order, ...orders]);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} addToOrders={addToOrders} />} />
            <Route path="/orders" element={<MyOrders orders={orders} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
