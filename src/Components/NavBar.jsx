import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav_bar">
      <ul className="nav_bar_list">
        <li><a href="#home">home</a></li>
        <li><a href="#about">sobre</a></li>
        <li><a href="#projects">projetos</a></li>
        <li><Link to="contact">contato</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
