import "../App.css";

/* eslint-disable react/prop-types */
function MyFoodCard(props) {
  return (
    <div className="listing-card">
      <img 
        className="food-image" 
        src={props.foodItem.image} 
        alt={props.foodItem.name} 
      />
      <div className="food-details">
        <h2>{props.foodItem.name}</h2>
        <p>{props.foodItem.description}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Expires in: </p>
          <p
            className="expiryTag"
            style={
              props.foodItem.expiry < 2 
                ? { backgroundColor: "#ff6666bc" } 
                : props.foodItem.expiry > 2 
                ? { backgroundColor: "#74a91fad" } 
                : {}
            }
          >
            {props.foodItem.expiry} day(s)
          </p>
        </div>
        <div>
          <br />
          <button className="listing-button">Plated it forward?</button>
        </div>
        <br></br>
        <p style={{ position: "absolute", bottom: 0, opacity: "50%" }}>
          Posted by {props.foodItem.user}
        </p>
      </div>
    </div>
  );
}

export default MyFoodCard;
