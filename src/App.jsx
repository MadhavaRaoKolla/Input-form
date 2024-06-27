import React from 'react';
import './Components/App.scss';
import Form from './Components/Form/Form';

const App = () => {
  return (
    <div className='container'>
      <header>
        User information page
      </header>
      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
