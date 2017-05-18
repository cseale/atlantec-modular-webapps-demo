import React from 'react';
import ReactDOM from 'react-dom';

import styles from './button.css';

export default class Button extends React.Component {
  render() {
    let color = this.props.color || 'primary';

    return (
      <a 
        className={`${styles.btn} ${styles[color]}`} 
        href="http://themes.3rdwavemedia.com/" 
        target="_blank">{this.props.text}</a>              
    )
  }
}
