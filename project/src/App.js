import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var thingsToSay=["GET TO WORK PEASANT.", "Someone help me!", "I appreciate it.", "To exist is to be in pain.","Stop clicking the button.","HELP! I've fallen and can't get up!","Insert MEME here.","Stop clicking the button and do something with your life.", "This is why you don't get laid.", "Quit while you're ahead."];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Motivation Machine!</h2>
        </div>
        <p className="App-intro">
          Click on the button to change the words.
        </p>
        <Text />
      </div>
    );
  }
}

class Text extends Component{
   constructor(thing){
     super();
     this.state={
      motto: ""
     }
   }
   buttonClicked() {
        console.log("hi");
        var x = Math.floor(Math.random() * ((thingsToSay.length)-1) );
        var word=thingsToSay[x];
        this.setState({
          motto: word
        })
    }
  render(){
    return(
      <div>
      <button className="button" onClick={(e)=>this.buttonClicked(e)}>CLICK ME!</button>
      <h1>{this.state.motto}</h1>
      </div>
    )
  }
}

export default App;
