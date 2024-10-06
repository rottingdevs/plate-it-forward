import "../App.css";
import FoodCard from "./FoodCard";

function FoodSearchWidget() {
  const food = {};

  return (
    <div className="foodSearchDiv">
      <div className="left70pad">
        <h1>What will be on your plate today?</h1>
        <input
          className="searchBar"
          type="text"
          placeholder="Search nearby goods"
          name="search"
        />
        <a
          href=""
          style={{
            background: "none",
            border: "none",
            display: "inline",
            position: "absolute",
            right: 55,
            top: 187,
          }}
        >
          <img src="./search_icon.svg" />
        </a>
        {/* This is where food cards are*/}
        <div className="scrollable">
          {food ? (
            <>
              <FoodCard
                foodItem={{
                  name: "Bok choy",
                  description: "2 heads of baby bok choy.",
                  expiry: 2,
                  image: "./bokchoy.png",
                  user: "Bobby Brown",
                }}
              />
              <FoodCard
                foodItem={{
                  name: "Carrots",
                  description: "Half a bag of carrots (0.5lb).",
                  expiry: 1,
                  image: "./carrots.png",
                  user: "Helen Chio",
                }}
              />
              <FoodCard
                foodItem={{
                  name: "Strawberries",
                  description: "Quarter pack of starwberries.",
                  expiry: 4,
                  image: "./strawberries.png",
                  user: "Bobby Brown",
                }}
              />
            </>
          ) : (
            <p style={{ fontWeight: 500, marginTop: "30px", opacity: "50%" }}>
              Sorry, there are no nearby goods right now. Check back later!
            </p>
          )}
        </div>
        <button className="button">Select item(s)</button>
      </div>
    </div>
  );
}

export default FoodSearchWidget;
