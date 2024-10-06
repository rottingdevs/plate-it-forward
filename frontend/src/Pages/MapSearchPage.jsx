import React, { useState } from 'react';
import NavBar from "../Components/NavBar";
import Map from "@/Components/Map";
import ConfirmFoodWidget from "../Components/ConfirmFoodWidget";
import FoodSearchWidget from "../Components/FoodSearchWidget";
import "../App.css";

function MapSearchPage() {
  // State to track the selected food items
  const [selectedItems, setSelectedItems] = useState([]);

  // Handler to update selected items when the "Select item(s)" button is clicked
  const handleSelectItems = (items) => {
    setSelectedItems(items); // Update the selected food items
  };

  return (
    <>
      <NavBar />
      {/* Pass the handler to FoodSearchWidget */}
      <FoodSearchWidget onSelectItems={handleSelectItems} />
      {/* Conditionally render ConfirmFoodWidget if there are selected items */}
      {selectedItems.length > 0 && <ConfirmFoodWidget selectedItems={selectedItems} />}
      <Map />
    </>
  );
}

export default MapSearchPage;
