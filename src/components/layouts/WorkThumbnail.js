import React, { Component } from 'react';
import './WorkThumbnail.scss';

export default class WorkThumbnail extends Component {
  render() {
    return (
      <div className='work-thumb' data-aos='fade-up'>
        <h3>{this.props.title}</h3>
        <div className='image-box'>
          <img
            src={process.env.PUBLIC_URL + `/images/work/${this.props.image}`}
            alt={this.props.title}
          />
        </div>
        <ul className='project-tags'>
          {this.props.tags.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a href={this.props.demo} target='_blank' rel='noopener noreferrer'>
          Demo
        </a>
        <a href={this.props.github} target='_blank' rel='noopener noreferrer'>
          Code
        </a>
      </div>
    );
  }
}
