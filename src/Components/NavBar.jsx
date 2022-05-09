/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav_bar">
      <a href="#">home</a>
      <a href="#about">sobre</a>
      <a href="#projects">projetos</a>
      <Link to="contact">contato</Link>
    </div>
  );
}

export default NavBar;
