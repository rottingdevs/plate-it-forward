import React, { useState } from 'react';
import NavBar from "../Components/NavBar";
import Map from "@/Components/Map";
import ConfirmFoodWidget from "../Components/ConfirmFoodWidget";
import FoodSearchWidget from "../Components/FoodSearchWidget";
import "../App.css";

function MapSearchPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isWidgetVisible, setWidgetVisible] = useState(false); // State to control widget visibility

  const handleSelectItems = (items) => {
    setSelectedItems(items);
    setWidgetVisible(true);
  };

  const handleCloseWidget = () => {
    setWidgetVisible(false);
  };

  return (
    <>
      <NavBar />
      <FoodSearchWidget onSelectItems={handleSelectItems} />
      {/* Conditionally render ConfirmFoodWidget if the widget is visible */}
      {isWidgetVisible && (
        <ConfirmFoodWidget selectedItems={selectedItems} onClose={handleCloseWidget} />
      )}
      <Map />
    </>
  );
}

export default MapSearchPage;
