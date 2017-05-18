import React from 'react';
import ReactDOM from 'react-dom';

import styles from './panel.css';

export default class Panel extends React.Component {
  render() {
    let template = null;
    if (this.props.insertHTML) {
      template = <div dangerouslySetInnerHTML={{ __html: this.props.children }}></div>
    } else {
      template = this.props.children
    }

    let heading = null;
    if (this.props.title) {
      heading = <h2 className={styles.sectionHeading}>{this.props.title}</h2>
    }

    return (
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          {heading}
          {template}
        </div>
      </section>
    )
  }
}
