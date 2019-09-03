import React, { Component } from 'react';
import './Work.scss';
import WorkThumbnail from './WorkThumbnail';
import workData from '../../workData';

export default class Work extends Component {
  render() {
    const workComponents = workData.map(work => (
      <WorkThumbnail
        key={work.id}
        title={work.title}
        description={work.description}
        image={work.image}
        tags={work.tags}
        demo={work.demo}
        github={work.github}
      />
    ));
    return (
      <section id='my-work'>
        <div className='container'>
          <h2 data-aos='fade-in'>My Work</h2>
          <div className='work-grid'>{workComponents}</div>
        </div>
      </section>
    );
  }
}
