import React, { useState, useEffect } from "react";
import "./Form.scss";
import Item from "../Item/Item";

const Form = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    about: "",
  });

  useEffect(() => {
    //PROMISE CHAINING
    // fetch("http://localhost:7000/data")
    //   .then((res) => res.json())
    //   .then((data) => setData(data))
    //   .catch((err) => console.log(err));
    Fetch();
    //for this method made useeffect function as async which is not good practice
    // try {
    //   const response = await (await fetch("http://localhost:7000/data")).json();
    //   setData(response);
    // } catch (error) {
    //   console.log("error...", error);
    // }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Fetch = async () => {
    try {
      const response = await (await fetch("http://localhost:7000/data")).json();
      setData(response);
    } catch (error) {
      console.log("error...", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7000/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Updating failed");
      }

      //either by adding response to data obj or by fetching latest data and appending to it

      //appending post data to it
      // const newData = await response.json();
      // setData([...data, newData]);

      //fetching updated data and appending to it
      // const newResponse = await (
      //   await fetch("http://localhost:7000/data")
      // ).json();
      // setData(newResponse);
      
      Fetch();
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        about: "",
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleDelete = async (id) => {
    //promise chaining......
    // fetch(`http://localhost:7000/data/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(res => {
    //   if (!res.ok) {
    //     throw new Error("Deleting failed");
    //   }
    //   setData(data.filter(user => user.id !== id));
    // })
    // .catch(err => console.log(err));

    const response = await fetch(`http://localhost:7000/data/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) throw new Error("Updation Failed");
    Fetch();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Gender</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="MALE"
            checked={formData.gender === "MALE"}
            onChange={handleChange}
            required
          />
          Male
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="FEMALE"
            checked={formData.gender === "FEMALE"}
            onChange={handleChange}
            required
          />
          Female
        </div>
        <label>About</label>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          required
        ></textarea>
        <input type="submit" />
      </form>
      {data && <Item data={data} handleDelete={handleDelete} />}
    </>
  );
};

export default Form;
