import React from 'react';
import ReactDOM from 'react-dom';

class Name extends React.Component {
    render() {
        return (
            <h1>James Lee</h1>
        );
    }
}

ReactDOM.render(<Name/>, document.getElementById('react-name'));