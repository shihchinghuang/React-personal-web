import React from 'react';
import Logo from '../img/logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li>
          <a href="#homepage">about me</a>
        </li>
        <li>
          <a href="#resume">resume</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
        {/* <li>
          <a href="/">English Version</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
