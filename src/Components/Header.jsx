import '../Styles/Header.css';
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import NavBar from './NavBar';

function Header() {
  return (
    <div className="header">
      <p>LAIZA</p>
      <NavBar />
      <BsFillSunFill />
    </div>
  );
}

export default Header;
