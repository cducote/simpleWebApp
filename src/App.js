import React, { Component } from 'react';
import People from './components/People'

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
      displayPage = <div>button was clicked</div>
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