import React, { Component } from 'react';
import Todoitems from './components/Todoitems/Todoitems';
import Additem from './components/Additem/Additem'


class App extends Component{

  state = {
    items : [
      {id:1,name:'amine',age:36},
      {id:2,name:'Aurelien',age:24},
      {id:3,name:'mohemed',age:22}
  ]
}

  deleteItem = (id) => {
  
 
   let items = this.state.items.filter(e => {
    return  e.id !== id
    
  })
  this.setState({ items });

}  
  addItem = (item) => {
    let items = this.state.items;
    items.push(item);
    this.setState({items})

  }
  render() {
return (
  <div className="App container">
  
      <h1 className='text-center'>Todo List</h1>
    <Todoitems items={this.state.items} deleteItem ={this.deleteItem} />
    <Additem addItem={this.addItem } />
    </div>
  );
}


}


export default App;
