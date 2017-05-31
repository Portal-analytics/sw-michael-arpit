import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
import Table from './Table.js'

var config = {
    apiKey: "AIzaSyC4aPMurZ3Boaun5byKQX1XJ-xoMDO2V_0",
    authDomain: "contracts-35424.firebaseapp.com",
    databaseURL: "https://contracts-35424.firebaseio.com",
    projectId: "contracts-35424",
    storageBucket: "contracts-35424.appspot.com",
    messagingSenderId: "116938675520"
  };
firebase.initializeApp(config);

var test = {
  name: "mike",
  secondName: "arpit",
}

firebase.database().ref('test').set(test);
var readData = firebase.database().ref("contracts");

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      description:"",
      price:"",
      contracts:[],
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentWillMount() {
    readData.on('value', (snapshot) => {
      this.setState({
        ...this.state,
        contracts: snapshot.val().contracts,
      })
    })
  }

  handleInputChange(field, e) {
      this.setState({
      ...this.state,
      [field]:e.target.value,

    })
  }

  changeRow(newName, newDescription, newPrice, index){
      const changedContract = {
        name: newName,
        description: newDescription,
        price: newPrice
      }
      let newContracts = this.state.contracts;
      newContracts[index] = changedContract;
      this.setState({
        ...this.state,
        contracts: newContracts
      })
      firebase.database().ref('contracts').set({
        contracts: newContracts
      });
    }

    handleSubmit(e){

      const person={
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
      }

      let newContracts = this.state.contracts;
      newContracts.push(person);
      this.setState({
        name:this.state.name,
        description: this.state.description,
        price: this.state.price,
        contracts: newContracts
      })
      firebase.database().ref('contracts').set({
        contracts: newContracts
      });
      e.preventDefault();
    }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Contract Tracker</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" onChange={(e) => this.handleInputChange("name", e)}/>
            </label>
            <label>
              Description:
              <input type="text" onChange={(e) => this.handleInputChange("description", e)}/>
            </label>
            <label>
              Price:
              <input type="text" onChange={(e) => this.handleInputChange("price", e)}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      <Table contracts={this.state.contracts} onRowChange={(newName, newDescription, newPrice, index)=>this.changeRow(newName, newDescription, newPrice, index)}/>
      </div>
    );
  }
}

export default App;
