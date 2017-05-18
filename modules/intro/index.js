import React from 'react';
import {Panel, Paragraph} from '../theme';

const INTRO_PARAGRAPH = [`Write a brief intro about yourself. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.`,
  `It's a good idea to include your personal interests and hobbies as well. Commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`];

export default class Intro extends React.Component{
  render() {
    let paragraphs = [];
    for (var i = 0; i < INTRO_PARAGRAPH.length; i++) {
      paragraphs.push(<Paragraph text={INTRO_PARAGRAPH[i]} key={i}></Paragraph>);
    }

    return (
      <Panel title={'Hello!'}>
        {paragraphs}
      </Panel>
    )
  }
}