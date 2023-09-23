import  { useState } from 'react';
import './navbar.css'; // Import the CSS file
import { FaHome, FaSearch, FaHeart, FaUser, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState('home');

  const handleItemClick = (item:any) => {
    setSelectedItem(item);
  };

  return (
    <nav className="navbar-container">
      <button
        className={`nav-item ${selectedItem === 'home' ? 'selected' : ''}`}
        onClick={() => handleItemClick('home')}
      >
        <FaHome />
      </button>
      <button
        className={`nav-item ${selectedItem === 'search' ? 'selected' : ''}`}
        onClick={() => handleItemClick('search')}
      >
        <FaSearch />
      </button>
      <button
        className={`nav-item ${selectedItem === 'heart' ? 'selected' : ''}`}
        onClick={() => handleItemClick('heart')}
      >
        <FaHeart />
      </button>
      <button
        className={`nav-item ${selectedItem === 'user' ? 'selected' : ''}`}
        onClick={() => handleItemClick('user')}
      >
        <FaUser />
      </button>
      <button
        className={`nav-item ${selectedItem === 'menu' ? 'selected' : ''}`}
        onClick={() => handleItemClick('menu')}
      >
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
