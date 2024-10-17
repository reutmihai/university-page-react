import React, { Component } from 'react';

export default class AddCities extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCitiesSubmit(this.state);
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Adding a city</h2>
            <input
              type="text"
              value={name}
              name="name"
              placeholder="City"
              onChange={this.handleChange}
              required
            />
          <button type="submit">ADD</button>
        </form>
      </>
    );
  }
}
