import React, { Component } from 'react';
import { Icon } from 'components/Common/Icon/Icon';
import AddCities from 'components/AddCities/AddCities';
import styles from 'components/Cities/Cities.module.css';

export default class Cities extends Component {
  state = {
    isAddCityVisible: false,
    cities: [
      {
        name: 'Suceava',
        id: Date.now(),
      },
    ],
  };

  renderCities = cities => {
    return cities.map(city => {
      return (
        <div key={city.id} className={styles['cities-list']}>
          <ul>
            <li>{city.name}</li>
          </ul>
        </div>
      );
    });
  };

  handleCity = city => {
    const newId = Date.now(); 
    const addNewCity = {
      name: city.name,
      id: newId,
    };


    this.setState(
      prevState => ({
        cities: [...prevState.cities, addNewCity],
        isAddCityVisible: false,
      }),
      () => {
      }
    );
  };

  render() {
    const { isAddCityVisible, cities } = this.state;
    return (
      <section className={styles['cities-section']}>
        <div className={styles['title-icon']}>
          <Icon variant="pin" label="pin" />
          <h1>Cities</h1>
        </div>
        <div className={styles['cities-list']}>{this.renderCities(cities)}</div>
        {isAddCityVisible && <AddCities onCitiesSubmit={this.handleCity} />}
        <button onClick={() => this.setState({ isAddCityVisible: true })}>
          ADD CITY
        </button>
      </section>
    );
  }
}
