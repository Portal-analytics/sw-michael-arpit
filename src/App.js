import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const slogans=["YOU CAN DO IT!", "JUST DO IT","YOU SAID TOMORROW YESTERDAY.", "I BELIVE IN YOU.", "BELIEVE IN YOURSELF."]

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      slogans:slogans,
      index:0,
      clickcount:0,
      inordercount:0,
      randomcount:0
    }
  }
  buttonFunction(){
    this.setState({
      ...this.state,
      index: this.state.index+1,
      clickcount:this.state.clickcount+1,
      inordercount:this.state.inordercount+1,
       })
       if(this.state.index===slogans.length-1){
         this.setState({
         ...this.state,
         index: 0
       })}
  }

  buttonFunctionRandom(){
    this.setState({
      ...this.state,
      index: Math.floor(Math.random() * (slogans.length)),
      clickcount:this.state.clickcount+1,
      randomcount:this.state.randomcount+1
       })
        if(this.state.index>=slogans.length){
         this.setState({
         ...this.state,
         index: 0
       })}
  }
  
  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Motivation Machine!</h1>
        </div>
        <button onClick={(e)=>this.buttonFunction(e)}>In-Order-Motivation</button>
        <button onClick={(e)=>this.buttonFunctionRandom(e)}>Random Motivation</button>
        <h1>
          {slogans[this.state.index]}
        </h1>
        <h2 className="footer">
          Total Count: {this.state.clickcount} In order count: {this.state.inordercount} Random Count: {this.state.randomcount}
        </h2>
      </div>
      <img src={logo} className="App-logo2" alt="logo" />
      </div>
    );
  }
}

export default App;
