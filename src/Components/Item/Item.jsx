import React from "react";
import "./Item.scss";

const Item = ({ data, handleDelete, handleEdit }) => {
  return (
    <div>
      {data.map((item) => (
        <div className="user-info" key={item.id}>
          <p>First Name: {item.firstName}</p>
          <p>Last Name: {item.lastName}</p>
          <p>About: {item.about}</p>
          <div className="buttons">
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
            <button className="delete" onClick={() => handleEdit(item.id)}>
              Update
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
