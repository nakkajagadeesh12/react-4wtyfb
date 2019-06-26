import React, { Component } from 'react';
import { render } from 'react-dom';
import { Checkbox } from 'semantic-ui-react';
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

      
        <p>working</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
