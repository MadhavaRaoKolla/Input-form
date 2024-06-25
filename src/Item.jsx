const Item = ({data,handleDelete}) => {
    // const data=props.data;
    return ( 
    <div className="item">
        {data.map((item) => (
          <div className="user-info" key={item.firstName}>
            <p>First Name: {item.firstName}</p>
            <p>Last Name: {item.lastName}</p>
            <p>About: {item.about}</p>
            <button className="delete" onClick={()=> handleDelete(item.firstName)}>Delete entry</button>
          </div>
        ))}
    </div>
);
}
 
export default Item;