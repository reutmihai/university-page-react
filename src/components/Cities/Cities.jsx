import React, { Component } from 'react';
import { Icon } from 'components/Common/Icon/Icon';
import styles from 'components/Cities/Cities.module.css';

export default class Cities extends Component {
  render() {
    return (
      <section className={styles['cities-section']}>
        <div className={styles['title-icon']}>
          <Icon variant="pin" label="pin" />
          <h1>Cities</h1>
        </div>
      </section>
    );
  }
}
