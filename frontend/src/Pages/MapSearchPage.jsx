import NavBar from "../Components/NavBar";
import Map from "@/Components/Map";
import ConfirmFoodWidget from "../Components/ConfirmFoodWidget";

import "../App.css";
import FoodSearchWidget from "../Components/FoodSearchWidget";

function MapSearchPage() {
  const state = true;
  return (
    <>
      <NavBar />
      <FoodSearchWidget />
      {state ? <ConfirmFoodWidget /> : <></>}
      <Map />
    </>
  );
}

export default MapSearchPage;
