import React from 'react';
import ReactDOM from 'react-dom';

import styles from './paragraph.css';

export default class Paragraph extends React.Component {
  render() {
    return (
      <p className={styles.paragraph}>{this.props.text}</p>
    )
  }
}

