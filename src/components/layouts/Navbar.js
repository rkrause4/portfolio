import React, { Component } from 'react';
import './Navbar.scss';

export default class Navbar extends Component {
  menuToggle = () => {
    let menuHam = document.querySelector('#nav-icon4'),
      body = document.querySelector('body');

    // Function actions
    menuHam.classList.toggle('open');
    body.classList.toggle('active');
  };

  render() {
    return (
      <nav>
        <div className='navbar container'>
          <p className='nav-logo'>
            <a href='#about'>Robert Krause</a>
          </p>

          <div id='nav-icon4' onClick={this.menuToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* Nav Logo ^^ */}
        </div>

        <div className='side-nav'>
          <ul>
            <li className='navItem'>
              <a href='/' onClick={this.menuToggle}>
                <h4>Robert Krause</h4>
              </a>
            </li>
            <li className='nav-item'>
              <a href='#top' onClick={this.menuToggle}>
                About Me
              </a>
            </li>
            <li className='nav-item'>
              <a href='#my-work' onClick={this.menuToggle}>
                My Work
              </a>
            </li>
            <li className='nav-item'>
              <a href='#contact' onClick={this.menuToggle}>
                Contact Me
              </a>
            </li>
            <hr />
            <li>
              <a
                href='https://github.com/rkrause4'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>

            <li>
              <a
                href='https://www.linkedin.com/in/robert-krause-14b195167/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>

            <li>
              <a
                href='https://codepen.io/Rob10'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-codepen'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='side-nav-bg'></div>
      </nav>
    );
  }
}
