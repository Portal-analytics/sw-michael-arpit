import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.quoteArray = ["Be squeaky clean in all that you do!", "Big Brother is synonymous with Honor Police",
                        "No swearsies!  Always act like you're around a pupper", "Do a heckin' good job today!",
                        "Why are the Honor Police more efficient than create-react-app?"];
  }
  
  nextIndexClick() {
    let newIndex = (this.state.currentIndex + 1) % this.quoteArray.length;
    this.setState({
      currentIndex: newIndex
    })
  }

  randomIndexClick() {
    let newIndex = this.getRandomInt(0, this.quoteArray.length)
    this.setState({
      currentIndex: newIndex
    })
  }

  // returns random int between min (inclusive) and max (non-inclusive)
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    let currentQuote = this.quoteArray[this.state.currentIndex];

    return (
      <div className="App">
        <h2> Big Brot - I mean the Honor Police Are Watching! </h2>

        <div className="Buttons">
          <button type="button" onClick={(e) => this.nextIndexClick(e)}> Next Quote! </button>
          <button type="button" onClick={(e) => this.randomIndexClick(e)}> Random Quote! </button>
        </div>

        <h1> {currentQuote} </h1>
        <img src="http://4.bp.blogspot.com/-5wKIOUwR2R0/VmhKc9Dd8-I/AAAAAAAACTw/6JGyPEPZ-cw/s1600/funny-motivational-memes.jpg" />

      </div>
    );
  }
}

export default App;
