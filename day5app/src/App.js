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
      contracts:[],
    }
    this.handleSubmit=this.handleSubmit.bind(this);
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

class Table extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      isEdit: false,
      editIndex: 0,
      newName: "",
      newDescription: "",
      newPrice: ""
    }
  }

  startEdit(index){
    this.setState({
      isEdit: true,
      editIndex: index,
      newName: "",
      newDescription: "",
      newPrice: ""
    })
  }

  handleInputChange(field, event) {
    this.setState({
      ...this.state,
      [field]: event.target.value,
    })
  }

  handleResubmit(e){
    this.props.onRowChange(this.state.newName, this.state.newDescription, this.state.newPrice, this.state.editIndex);
    e.preventDefault();
    this.setState({
      ...this.state,
      isEdit: false

    })
  }
  render(){
    console.log(this.state);
    let contractRows=this.props.contracts.map((c, index) =>
      <tr>
          <td>{c.name}</td>
          <td>{c.description}</td>
          <td>{c.price}</td>
          <button type="button" onClick={() => this.startEdit(index)}> Edit </button>
      </tr>
    )

    if (this.state.isEdit) {
      contractRows[this.state.editIndex] = (
        <form onSubmit={(e) => this.handleResubmit(e)}>
          <input type="text" placeholder="New Name" onChange={(e) => this.handleInputChange("newName", e)}/>
          <input type="text" placeholder="New Description" onChange={(e) => this.handleInputChange("newDescription", e)}/>
          <input type="text" placeholder="New Price" onChange={(e) => this.handleInputChange("newPrice", e)}/>
          <input type="submit" value="Done" />
        </form>
      )
    }

    return(
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
          {contractRows}
        </table>
      </div>
    )
  }
}

export default App;
