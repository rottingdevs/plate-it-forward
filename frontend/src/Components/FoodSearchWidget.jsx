/* eslint-disable react/jsx-key */
// import { useEffect } from "react";
import "../App.css";
import FoodCard from "./FoodCard";

function FoodSearchWidget() {
  const foodItems = [
    {
      name: "Bok choy",
      description: "2 heads of baby bok choy.",
      expiry: 2,
      image: "./bokchoy.png",
      user: "Bobby Brown",
    },
    {
      name: "Carrots",
      description: "Half a bag of carrots (0.5lb).",
      expiry: 1,
      image: "./carrots.png",
      user: "Helen Chio",
    },
    {
      name: "Strawberries",
      description: "Quarter pack of starwberries.",
      expiry: 4,
      image: "./strawberries.png",
      user: "Bobby Brown",
    },
  ];

  // function filterResults(ItemsArr, SearchStr) {
  //   var input = document.getElementById('searchInput');
  //   var filter = input.value.toUpperCase();

  //   for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("FoodCard");
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  // }

  return (
    <div className="foodSearchDiv">
      <div className="left70pad">
        <h1>What will be on your plate today?</h1>
        <input
          className="searchBar"
          type="text"
          placeholder="Search nearby goods"
          name="search"
          id="searchInput"
        />
        <button
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
        </button>
        {/* This is where food cards are*/}
        <div className="scrollable">
          {foodItems.map((food) => (
            <FoodCard foodItem={food}></FoodCard>
          ))}
        </div>
        <button className="button">Select item(s)</button>
      </div>
    </div>
  );
}

export default FoodSearchWidget;
