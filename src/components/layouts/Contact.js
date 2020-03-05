import React, { Component } from 'react';
import './Contact.scss';

export default class Contact extends Component {
  render() {
    return (
      <section id='contact'>
        <div className='container'>
          <h2 data-aos='fade-in' data-aos-delay='100'>
            Let's Get In Touch
          </h2>
          <form method='POST' id='contact-form' name='contact'>
            <input type='hidden' name='form-name' value='contact' />
            <div
              className='form-group'
              data-aos='fade-left'
              data-aos-delay='250'
            >
              <label htmlFor='email'>Email</label>
              <input name='email' id='email' type='text' placeholder='Email' />
            </div>

            <div
              className='form-group'
              data-aos='fade-right'
              data-aos-delay='350'
            >
              <label htmlFor='name'>Name</label>
              <input name='name' id='name' type='text' placeholder='Name' />
            </div>

            <div
              className='form-group'
              data-aos='fade-left'
              data-aos-delay='450'
            >
              <label htmlFor='subject'>Subject</label>
              <input
                name='subject'
                id='subject'
                type='text'
                placeholder='Subject'
              />
            </div>

            <div
              className='form-group'
              data-aos='fade-right'
              data-aos-delay='550'
            >
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                placeholder='Message'
              ></textarea>
            </div>

            <input
              type='submit'
              value='Send Message'
              id='submit'
              data-aos='fade-left'
              data-aos-delay='800'
              data-aos-offset='100'
            />
          </form>
        </div>
      </section>
    );
  }
}
