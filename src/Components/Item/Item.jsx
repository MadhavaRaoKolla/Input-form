import React from 'react';
import './Item.scss';

const Item = ({ data, handleDelete }) => {
  return (
    <div>
      {data.map(item => (
        <div className='user-info' key={item.id}>
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            <p>About: {item.about}</p>

          <button className='delete' onClick={()=> handleDelete(item.id)}>Delete</button>

        </div>
      ))}
    </div>
  );
}

export default Item;