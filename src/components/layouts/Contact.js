import React, { Component } from 'react';
import './Contact.scss';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      subject: '',
      message: '',
      formErrors: {
        email: '',
        name: '',
        subject: '',
        message: ''
      },
      emailValid: false,
      nameValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false
    };
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors,
      emailValid = this.state.emailValid,
      nameValid = this.state.nameValid,
      subjectValid = this.state.subjectValid,
      messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'is invalid';
        break;
      case 'name':
        nameValid = !value.length;
        fieldValidationErrors.name = nameValid ? '' : 'cannot be blank';
        break;
      case 'subject':
        subjectValid = !value.length;
        fieldValidationErrors.subject = subjectValid ? '' : 'cannot be blank';
        break;
      case 'message':
        messageValid = !value.length;
        fieldValidationErrors.subject = messageValid ? '' : 'cannot be blank';
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        nameValid: nameValid,
        subjectValid: subjectValid,
        messageValid: messageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.nameValid &&
        this.state.subjectValid &&
        this.state.messageValid
    });
  }
  render() {
    return (
      <section id='contact'>
        <div
          className='container'
          // data-aos='fade-left'
          // data-aos-delay='50'
          // data-aos-offset='650'
        >
          <h2 data-aos='fade-in' data-aos-delay='100'>
            Let's Get In Touch
          </h2>
          <form action='POST' id='contact-form' name='contact'>
            <input type='hidden' name='form-name' value='contact' />
            <div
              className='form-group'
              data-aos='fade-left'
              data-aos-delay='250'
            >
              <label htmlFor=''>Email</label>
              <input
                name='email'
                id='email'
                type='text'
                placeholder='Email'
                value={this.state.email}
                onChange={event => this.handleUserInput(event)}
              />
            </div>

            <div
              className='form-group'
              data-aos='fade-right'
              data-aos-delay='350'
            >
              <label htmlFor=''>Name</label>
              <input
                name='name'
                id='name'
                type='text'
                placeholder='Name'
                value={this.state.name}
                onChange={event => this.handleUserInput(event)}
              />
            </div>

            <div
              className='form-group'
              data-aos='fade-left'
              data-aos-delay='450'
            >
              <label htmlFor=''>Subject</label>
              <input
                name='subject'
                id='subject'
                type='text'
                placeholder='Subject'
                value={this.state.subject}
                onChange={event => this.handleUserInput(event)}
              />
            </div>

            <div
              className='form-group'
              data-aos='fade-right'
              data-aos-delay='550'
            >
              <label htmlFor=''>Message</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                placeholder='Message'
                value={this.state.message}
                onChange={event => this.handleUserInput(event)}
              ></textarea>
            </div>

            <input
              type='submit'
              value='Send Message'
              id='submit'
              data-aos='fade-left'
              data-aos-delay='800'
              data-aos-offset='100'
              onClick={this.validateField}
            />
          </form>

          {/*  */}
          {/* <form name='contact' method='post'>
            <input type='hidden' name='form-name' value='contact' />
            <p>
              <label>
                Your Name: <input type='text' name='name' />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type='email' name='email' />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name='message'></textarea>
              </label>
            </p>
            <p>
              <button type='submit'>Send</button>
            </p>
          </form> */}
        </div>
      </section>
    );
  }
}
