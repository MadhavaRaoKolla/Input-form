import React, { useState,useEffect } from 'react';
import './App.scss';
import Form from './Form';
import Item from './Item';

const App = () => {
  
const [data, setData] = useState([]); 

const addData = (newData) => {
  setData([...data,newData]);
}

const handleDelete = (firstName) => {
  const newData = data.filter(item =>  item.firstName !== firstName)
  setData(newData);
  // fetch(`http://localhost:7000/data/${firstName}`,{method: 'DELETE'});
}

useEffect( ()=> {
  fetch('http://localhost:7000/data')
  .then(res => { return res.json()})
  .then(data => setData(data))
  },[])
  return (
    <div className='container'>
      <header>
        User information page
      </header>
      <main>
        <Form addData={addData}/>
        { data && <Item data={data} handleDelete={handleDelete}/>}
      </main>
    </div>
  );
}

export default App;
