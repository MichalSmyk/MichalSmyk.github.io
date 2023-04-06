import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li className="dropdown">
          <a href="#">Projects &#9662;</a>
          <ul className="dropdown-menu">
            <li><a href="#">Project 1</a></li>
            <li><a href="#">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
          </ul>
        </li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
