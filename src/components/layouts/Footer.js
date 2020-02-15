import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <p>Created with React, HTML, and SCSS</p>
          <p>Hosted on Netlify</p>
          <p>Robert Krause © 2020</p>
          <div className='social-links sl-colored'>
            <a
              href='https://github.com/rkrause4'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/robert-krause-14b195167/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
            <a
              href='https://codepen.io/Rob10'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-codepen'></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
