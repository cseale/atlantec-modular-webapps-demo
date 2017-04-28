import React from 'react';
import ReactDOM from 'react-dom';

import styles from './panel.css';

const template = `<div class="content">
  <p>Write a brief intro about yourself. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>    
  <p>It's a good idea to include your personal interests and hobbies as well. Commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
 </div>`;

class Panel extends React.Component {
  render() {
    return (
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>{this.props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(<Panel title={'Hello!'}>{template}</Panel>, document.getElementById('react-about-me'));