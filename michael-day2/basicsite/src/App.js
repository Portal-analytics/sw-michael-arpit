import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  handleClick() {
    let newIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    })
  }

  render() {
    const sayings = ["Be yourself", "Don't let You-Know-Who back into the party", "Wine helps.  Don't over do it",
    "Life is like a box of chocolates.  When it gets dark, there's more flavor", "Just listen to The National"];
    return (
      <div className="App">
        <h1 className="Title">
          Life Advice.
        </h1>
        <h2 className="Subtitle">
          For the rest of us, from the rest of us.
        </h2>
        <button className="Button" onClick={(e) => this.handleClick(e)}>
          Click Me For More Advice!!
        </button>
        <Text text={sayings[this.state.currentIndex % sayings.length] + ", ya dingus!"}/>
        <img src={"https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2016/03/13/635934849918095591-1165737005_12ac774e0926a679d268166c66a63e47.jpg"} />
      </div>
    );
  }
}

class Text extends Component {
  render() {
    return (
      <h3> {this.props.text} </h3>
    )
  }
}

export default App;
