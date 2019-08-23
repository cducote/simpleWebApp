import React, { Component } from 'react';
import People from './components/People'
import FrequencyCount from './components/FrequencyCount';

class App extends Component {
  state = {
    buttonClicked: false
  }

  handleClick = async () => {
    this.setState({ buttonClicked: true })
  }
  render() {
    const buttonClicked = this.state.buttonClicked
    let displayPage
    if (buttonClicked) {
      displayPage = <FrequencyCount/>
    } else {
      displayPage = <People/>
    }
    return (
      <div>
        {displayPage}
        <button onClick={this.handleClick}>Click me for thing</button>
      </div>
    );
  }
}

export default App;