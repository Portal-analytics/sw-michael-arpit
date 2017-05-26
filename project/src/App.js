import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'


var thingsToSay=["GET TO WORK PEASANT.", "Someone help me!", "I appreciate it.", "To exist is to be in pain.","Stop clicking the button.","HELP! I've fallen and can't get up!","Insert MEME here.","Stop clicking the button and do something with your life.", "This is why you don't get laid.", "Quit while you're ahead."];

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
        <AppBar title="My App">
        </AppBar>
        </MuiThemeProvider>
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
      motto: "",
      index: 20
     }
   }
   randbuttonClicked() {
        var x = Math.floor(Math.random() * ((thingsToSay.length)-1) );
        var word=thingsToSay[x];
        this.setState({
          motto: word,
          index: x
        })
    }
    orderbuttonClicked() {
        var x = (this.state.index)+1;
        if(x>=thingsToSay.length){
          x=0;
        }
        var word=thingsToSay[x];
        this.setState({
          motto: word,
          index: x
                })
    }
  render(){
    return(
      <div>
      <button className="randombutton" onClick={(e)=>this.randbuttonClicked(e)}>CLICK ME RANDOMLY!</button>
      <button className="orderbutton" onClick={(e)=>this.orderbuttonClicked(e)}>CLICK ME IN ORDER!</button>
      <h1>{this.state.motto}</h1>
      </div>
    )
  }
}


class bottom extends Component{
  render(){

    return(
      <div>
      <h1 className="footer">
        THIS IS A FOOTER. ARE YOU HAPPY BRENT?
      </h1>
      </div>
    )
  }
}
export default App;
