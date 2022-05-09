import '../Styles/Components/Header.css';
import React from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import NavBar from './NavBar';

function Header() {
  return (
    <div className="header">
      <h2>LAIZA</h2>
      <NavBar />
      <BsFillSunFill size="50" />
    </div>
  );
}

export default Header;
