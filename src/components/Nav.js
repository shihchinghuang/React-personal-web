import React from 'react';
import Logo from '../img/logo.svg';

const Nav = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <ul>
        <li>
          <a href="/">about me</a>
        </li>
        <li>
          <a href="/">resume</a>
        </li>
        <li>
          <a href="/">portfolio</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
        <li>
          <a href="/">English Version</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
