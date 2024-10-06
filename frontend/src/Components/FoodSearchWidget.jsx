import "../App.css";

function FoodSearchWidget() {
  return (
    <div className="foodSearchDiv">
      <div className="left70pad">
        <h1>What will be on your plate today?</h1>
      </div>
      <div className="searchBar">
        <p className="paragraph">Search nearby goods</p>
        <img src="./search_icon.svg" />
      </div>
    </div>
  );
}

export default FoodSearchWidget;
