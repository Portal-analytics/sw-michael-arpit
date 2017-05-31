import React from 'react'

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

export default Table;