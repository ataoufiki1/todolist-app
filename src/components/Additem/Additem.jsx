import React, { Component } from 'react';
import './Additem.css';

class Additem extends Component{

  state = {
    name: '',
    age:''
  }

  handleChange = (e) =>
  {
    this.setState({[e.target.id] : e.target.value})
  }

  bandleSubmit = (e) =>
  {
    e.preventDefault();
    if (e.target.name.value === '')
    {
      return false
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: '',
        age:''
      })
      }
  }
  
  render() {
return (
    <div>
    <form  onSubmit={this.bandleSubmit}>
      <input type="text" placeholder='Entrer name ...' id='name' onChange={this.handleChange} />
      <input type="number" placeholder='Entrer age ...' id='age' onChange={this.handleChange} />
      <input type="submit" value="add" />
    </form> 
   </div>
  );
}


}


export default Additem;
