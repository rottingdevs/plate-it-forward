import React, { useState } from 'react';
import "../App.css";
import FoodCard from "./FoodCard";

function FoodSearchWidget({ onSelectItems }) {
  const foodItems = [
    {
      id: 1,
      name: "Bok choy",
      description: "2 heads of baby bok choy.",
      expiry: 2,
      image: "./bokchoy.png",
      user: "Bobby Brown",
      phone: "647-225-7161",
      email: "bb.brown@gmail.com"
    },
    {
      id: 2,
      name: "Carrots",
      description: "Half a bag of carrots (0.5lb).",
      expiry: 1,
      image: "./carrots.png",
      user: "Helen Chio",
      phone: "647-225-7155",
      email: "helen.chio@gmail.com"
    },
    {
      id: 3,
      name: "Strawberries",
      description: "Quarter pack of strawberries.",
      expiry: 4,
      image: "./strawberries.png",
      user: "Bobby Brown",
      phone: "647-225-7161",
      email: "bb.brown@gmail.com"
    }
  ];

  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle selected food items
  const toggleSelectItem = (item) => {
    if (selectedItems.some(selected => selected.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id)); // Unselect item by id
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelectItems = () => {
    onSelectItems(selectedItems);  // Simply pass the current selectedItems
  };

  // Filter food items based on the search term
  const filteredItems = foodItems.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) // Match the name with the search term
  );

  return (
    <div className="foodSearchDiv">
      <div className="left70pad">
        <h1>What will be on your plate today?</h1>
        <input
          className="searchBar"
          type="text"
          placeholder="Search nearby goods"
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <div className="scrollable">
          {filteredItems.length > 0 ? (
            filteredItems.map((food) => (  // Render only the filtered items
              <div
                key={food.id}
                className={`food-card ${selectedItems.some(selected => selected.id === food.id) ? 'selected' : ''}`}
                onClick={() => toggleSelectItem(food)}
                style={{ cursor: 'pointer' }}
              >
                <FoodCard foodItem={food} />
              </div>
            ))
          ) : (
            <p>No Results Found</p> 
          )}
        </div>
        <button className="button" onClick={handleSelectItems}>
          Select item(s)
        </button>
      </div>
    </div>
  );
}

export default FoodSearchWidget;
