import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      description:"",
      price:"",
      contracts:[]
    }
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handleDesChange=this.handleDesChange.bind(this);
    this.handlePriceChange=this.handlePriceChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    const des=this.state.description;
    const price=this.state.price;
    const contract=this.state.contracts;
    this.setState({
      name:e.target.value,
      description: des,
      price: price,
      contracts:contract,
    })
    console.log(this.state)
  }

  handleDesChange(e){
    const name=this.state.name;
    const price=this.state.price;
    const contract=this.state.contracts;
    this.setState({
      name:name,
      description: e.target.value,
      price: price,
      contracts:contract,
    })
    console.log(this.state)
  }

  handlePriceChange(e){
    const des=this.state.description;
    const contract=this.state.contracts;
    this.setState({
      name:this.state.name,
      description: des,
      price: e.target.value,
      contracts:contract,
    })
    console.log(this.state)
  }
  
    handleSubmit(e){
      var arrayperson=[];
      arrayperson.push(this.state.name);
      arrayperson.push(this.state.description);
      arrayperson.push(this.state.price);
      let newContracts = this.state.contracts;
      newContracts.push(arrayperson)
      this.setState({
        name:this.state.name,
        description: this.state.description,
        price: this.state.price,
        contracts: newContracts
      })
      console.log(this.state)
      e.preventDefault();
    }

  render() {
    const listContracts = this.state.contracts.map((c) =>
      <li> { "Name: "+c[0]+" Description: "+c[1]+" Price: "+c[2]} </li>
    );

    console.log(listContracts);

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
              <input type="text" onChange={this.handleNameChange}/>
            </label>
            <label>
              Description:
              <input type="text" onChange={this.handleDesChange}/>
            </label>
            <label>
              Price:
              <input type="text" onChange={this.handlePriceChange}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      <ul type="none">
        {listContracts}
      </ul>
      </div>
    );
  }
}

export default App;
