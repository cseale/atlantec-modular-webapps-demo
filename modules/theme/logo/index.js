import React from 'react';
import ReactDOM from 'react-dom';

import logo from './profile.png';
import styles from './logo.css';

export default class Logo extends React.Component {
  render() {
    return (
      <img src={logo} className={styles.logo} alt="James Lee"/>
      )
  }
}

