import React from 'react';
import './Todoitems.css';
const Todoitems = (props) => {

  const {items ,deleteItem} = props;
 
  let length = items.length;
  console.log(length);
  const data = length ? ( items.map(item => {
    return (
      <div Key={item.id}>
        <span className='name'>{item.name}</span>
         <span className='age'>{item.age}</span>
        <span className='action icon' onClick={ () => deleteItem(item.id)}>&times;</span>
      </div>
    )

  })) : (
      <p>la table est vide</p>
  )
  return (
    <div className='ListItems'>
      
      <div>
        <span className='name title'>Name</span>
         <span className='age title'>Age</span>
        <span className='action title'>Action</span>
        
      </div>
      {data}
    </div>
  )
}

export default Todoitems