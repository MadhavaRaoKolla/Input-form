import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './Form';
import Item from './Item';

const App = () => {
  const [data, setData] = useState([]);  // Data of each entered user - data is set using JSON server

  const addData = (newData) => { // Input data should be added to data in the server
    setData([...data, newData]);
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:7000/data/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        throw new Error("Deleting failed");
      }
      setData(data.filter(user => user.id !== id));
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    fetch('http://localhost:7000/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <header>
        User information page
      </header>
      <main>
        <Form addData={addData} />
        {data && <Item data={data} handleDelete={handleDelete} />}
      </main>
    </div>
  );
}

export default App;
