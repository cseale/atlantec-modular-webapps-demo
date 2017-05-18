import React from 'react';
import {Panel} from '../theme';

import template from './contact.html';

export default class Contact extends React.Component{
  render() {
    return (
      <Panel insertHTML={true}>
        {template}
      </Panel>
    )
  }
}