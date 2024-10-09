import React, { Component } from 'react';

export default class AddTutor extends Component {
  state = {
    
    surname: '',
    name: '',
    phone: '',
    city: '',
    email: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); 
  };

  render() {
    const { surname, name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Add Tutor</h1>
          <label>
            <span>Surname</span>
            <input
              type="text"
              value={surname}
              name="surname"
              placeholder="Surname"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Name</span>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Invite</button>
        </form>
      </>
    );
  }
}
