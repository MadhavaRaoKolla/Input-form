import React from 'react'
import { useState } from 'react'


const App = () => {

  const [formData,setFromData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    about:''
  });

  const [submittedData,setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFromData({
      ...formData,[name]:value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log(submittedData);
  };

  return (
    <>
      <header>
        User information page
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" name='firstName' value={formData.firstName} onChange={handleChange}/>
          <label>Last Name</label>
          <input type="text" name='lastName' value={formData.lastName} onChange={handleChange}/>
          <label>Email</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange}/>
          <label>Gender</label>
          <input type="radio" name='gender' value='MALE' onChange={handleChange}/>Male
          <input type="radio" name='gender' value='FEMAL' onChange={handleChange}/>Female
          <label>About</label>
          <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
          <input type="submit" />
        </form>
      </main>
    </>
  )
}

export default App