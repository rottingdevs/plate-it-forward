import React, { useState } from 'react';
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
      description: "Quarter pack of strawberries.",
      expiry: 4,
      image: "./strawberries.png",
      user: "Bobby Brown",
    },
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to filter food items based on search query
  const filteredFoodItems = foodItems.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
          <img src="./search_icon.svg" alt="Search" />
        </button>
        {/* Display filtered food cards */}
        <div className="scrollable">
          {filteredFoodItems.length > 0 ? (
            filteredFoodItems.map((food, index) => (
              <FoodCard key={index} foodItem={food}></FoodCard>
            ))
          ) : (
            <p>No food items found.</p>
          )}
        </div>
        <button className="button">Select item(s)</button>
      </div>
    </div>
  );
}

export default FoodSearchWidget;
