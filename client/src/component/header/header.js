import React, { Component } from 'react';
import arrowDown from '../images/down-icon.png';
import './header.css';
import './header-mobile.css';

class Header extends Component {
  render() {
    return (
      <header>
          <nav>
              <a href="#about">About</a>
              <a href="#programming">Programming</a>
              <a href="#projects">Projects</a>
              <a href="#blog">Blog</a>
              <a href="#contact" className="right">Contact</a>
          </nav>
          <h1 className="typewriter">&lt;HUYGHE&gt;</h1>
          <a href="#about"><img src={arrowDown} alt="goDown"/></a>
      </header>
    );
  }
}

export default Header;
