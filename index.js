import React, { Component } from 'react';
import { render } from 'react-dom';
import CheckboxExampleToggle from './CheckboxExampleToggle';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <p>
          Start editing to see some magic happen :)
        </p>
        <CheckboxExampleToggle />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
