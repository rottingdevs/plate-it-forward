/* eslint-disable react/prop-types */
import "../App.css";

function FoodCard(props) {
  //   const foodItem = {
  //     name: "Bok choy",
  //     description: "2 heads of baby bok choy.",
  //     expiry: "2 days",
  //     image: "./bokchoy.png",
  //     user: "Bobby Brown",
  //   };

  return (
    <div className="cardInner">
      <img style={{ height: "100%" }} src={props.foodItem.image}></img>
      <div style={{ marginLeft: "15px", position: "relative" }}>
        <h2>{props.foodItem.name}</h2>
        <p>{props.foodItem.description}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>Expires in: </p>
          <p
            className="expiryTag"
            style={
              props.foodItem.expiry < 2 ? { backgroundColor: "#ff6666bc" } : 
              props.foodItem.expiry > 2 ? { backgroundColor: "#74a91fad" } : {}
            }
          >
            {props.foodItem.expiry} day(s)
          </p>
        </div>
        <p style={{ position: "absolute", bottom: 0, opacity: "50%" }}>
          Posted by {props.foodItem.user}
        </p>
      </div>
    </div>
  );
}

export default FoodCard;
