import React from 'react';
import {FaComments} from 'react-icons/fa';

function Header({ onMessengerClick }) {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">Moomin+</div>
      </div>
      <div className="header__right">
        <div className="header__icon" onClick={onMessengerClick}>
          <FaComments />
        </div>
      </div>
    </div>
  );
}

export default Header; 