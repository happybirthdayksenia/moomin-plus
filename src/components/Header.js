import React from 'react';
import { FaSearch, FaBell, FaComments, FaHome, FaUsers, FaBookmark, FaUser } from 'react-icons/fa';

function Header({ currentUser, onMessengerClick }) {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">Moomin+</div>
        <div className="header__search">
          <FaSearch />
          <input type="text" placeholder="Search Moomin+" />
        </div>
      </div>
      
      <div className="header__right">
        <div className="header__icon">
          <FaHome />
        </div>
        <div className="header__icon">
          <FaUsers />
        </div>
        <div className="header__icon">
          <FaBookmark />
        </div>
        <div className="header__icon" onClick={onMessengerClick}>
          <FaComments />
        </div>
        <div className="header__icon">
          <FaBell />
        </div>
        <img 
          src={currentUser.avatar} 
          alt={currentUser.name}
          className="header__avatar"
        />
      </div>
    </div>
  );
}

export default Header; 