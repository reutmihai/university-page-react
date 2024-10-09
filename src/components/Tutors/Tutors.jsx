import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './Tutors.module.css';

class Tutors extends Component {
  state = {
    isADdFormVisible: false,
    list: [
      {
        id: 0,
        firstName: 'Antonio',
        lastName: 'García',
        phone: '+34 456 890 302',
        email: 'antonio.garcia@goit.global',
        city: 'Madrid',
        options: 'Group creation, editing teacher profiles',
      },
    ],
  };
  renderList = items => {
    return items.map(el => {
      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>
            <div>{el.firstName}</div>
            <div>{el.lastName}</div>
          </div>
          <div className={styles.info}>
            <span>{el.phone}</span>
            <span>{el.email}</span>
            <span>{el.city}</span>
          </div>
          <div>{el.options}</div>
        </div>
      );
    });
  };

  render() {
    const { isADdFormVisible, list } = this.state;
    return (
      <section className={styles.tutorSection}>
        <h1>Tutors</h1>
        <div className={styles.tutorsList}>{this.renderList(list)}</div>
        <button>@ Add tutor</button>
      </section>
    );
  }
}

Tutors.propTypes = {
  list: PropTypes.array,
};

export default Tutors;
