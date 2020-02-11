import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header id="about">
        <div className="container">
          <div className="heading-content">
            <h1 data-aos="fade-left">Robert Krause</h1>
            <h3 data-aos="fade-right">Front-End Web Developer</h3>
            <p data-aos="fade-up">
              I'm a Front-End Web Developer from the Greater Chicago area. I
              have a passion for creating quality websites of all types. I love
              making websites using HTML, CSS, and JavaScript. I'm currently
              enjoying my time learning web development. Feel free to contact me
              if you want to talk. I'd love to hear from you.
            </p>
          </div>
          <div
            className="social-links"
            data-aos="fade-left"
            data-aos-offset="80"
          >
            <a
              href="https://github.com/rkrause4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/robert-krause-14b195167/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://codepen.io/Rob10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
