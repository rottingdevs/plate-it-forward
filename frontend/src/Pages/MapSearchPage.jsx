import NavBar from "../Components/NavBar";
import Map from "@/Components/Map";

import "../App.css";
import FoodSearchWidget from "../Components/FoodSearchWidget";

function MapSearchPage() {
  return (
    <>
      <NavBar />
      <FoodSearchWidget />
      <Map />
    </>
  );
}

export default MapSearchPage;
