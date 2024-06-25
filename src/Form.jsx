import React from 'react'
import { useState } from 'react';

const Form = ({addData}) => {

  const [formData,setFromData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    about:''
  });

  const handleChange = (e) => {
    setFromData(
      {...formData,[e.target.name]:e.target.value}
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:7000/data', { method:'POST',
                                          headers: {'Content-Type':'application/json'},
                                          body:JSON.stringify(formData)})
    .then(res => res.json())
    .then(data => {
      addData(data);
      setFromData({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        about:''
      })
    })
  }


  return (
   <>
    <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" name='firstName' value={formData.firstName} onChange={handleChange}/>
          <label>Last Name</label>
          <input type="text" name='lastName' value={formData.lastName} onChange={handleChange}/>
          <label>Email</label>
          <input type="email" name='email' value={formData.email} onChange={handleChange}/>
          <label>Gender</label>
          <div>
            <input type="radio" name='gender' value='MALE' onChange={handleChange}/>Male
          </div>
          <div>
            <input type="radio" name='gender' value='FEMAL' onChange={handleChange}/>Female
          </div>
          <label>About</label>
          <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
          <input type="submit" />
        </form>
   </>
  )
}

export default Form