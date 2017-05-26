import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import './App.css';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const appBarStyles = {
  title: {
    cursor: 'pointer',
  },
};

const buttonStyle = {
  margin: 12,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  handleClick() {
    // moves to next index
    let newIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    })
  }

  handleRandomClick() {
    // calculates a random index
    let min = 0;
    let max = 4;
    let newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState ({
      currentIndex: newIndex
    })
  }

  render() {
    const sayings = ["Be yourself", "Don't let You-Know-Who back into the party", "Wine helps.  Don't over do it",
    "Life is like a box of chocolates.  When it gets dark, there's more flavor", "Just listen to The National"];
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
            title={<span style={appBarStyles.title}>Mike's Life Advice</span>}
            onTitleTouchTap={handleTouchTap}
          />
        </MuiThemeProvider>
        <h1 className="Title">
          Life Advice.
        </h1>
        <h2 className="Subtitle">
          For the rest of us, from the rest of us.
        </h2>
        <Button 
          onClick1={() => this.handleClick()}
          onClickRandom={() => this.handleRandomClick()}
        />
        <Text text={sayings[this.state.currentIndex % sayings.length] + ", ya dingus!"}/>
        <img src={"https://az616578.vo.msecnd.net/files/responsive/embedded/any/desktop/2016/03/13/635934849918095591-1165737005_12ac774e0926a679d268166c66a63e47.jpg"} />
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton label="In Order!!" style={buttonStyle} onClick={this.props.onClick1} />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <RaisedButton label="RaNd0m" style={buttonStyle} onClick={this.props.onClickRandom} />
        </MuiThemeProvider>
      </div>
    )
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
