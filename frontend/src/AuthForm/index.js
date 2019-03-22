import React, { Component } from 'react';
import styled from 'styled-components';
import CourtsideCounterAPI from '../util/CourtsideCounterAPI';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.pathname === '/login') {
      console.log('submit login');
    } else {
      let res = await CourtsideCounterAPI.signup(this.state);
      console.log(res);
      this.setState({ email: '', name: '' });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const nameInput = (
      <>
        <label htmlFor="email" />
        <input
          onChange={this.handleChange}
          id="email"
          name="name"
          type="text"
          value={this.state.name}
        />
      </>
    );
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email" />
        <input
          onChange={this.handleChange}
          id="email"
          name="email"
          type="text"
          value={this.state.email}
        />
        {this.props.location.pathname === '/signup' ? nameInput : null}
        <button />
      </form>
    );
  }
}

export default AuthForm;
