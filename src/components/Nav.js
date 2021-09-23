import React from 'react';
import Logo from '../img/logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li>
          <a href="#homepage">ABOUT</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#resume">RESUME</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        {/* <li>
          <a href="/">English Version</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
