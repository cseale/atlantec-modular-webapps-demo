import React from 'react';
import ReactDOM from 'react-dom';
import {Logo, Name, Panel, Button} from './theme';
import Intro from './intro';
import Contact from './contact';

ReactDOM.render(<Logo></Logo>, document.getElementById('react-logo'));
ReactDOM.render(<Name/>, document.getElementById('react-name'));
ReactDOM.render(<Intro></Intro>, document.getElementById('react-about-me'));
ReactDOM.render(<Contact></Contact>, document.getElementById('react-basic-info'));
ReactDOM.render(<Button color={'primary'} text={'Contact Me'}></Button>, document.getElementById('react-contact-me-btn'));