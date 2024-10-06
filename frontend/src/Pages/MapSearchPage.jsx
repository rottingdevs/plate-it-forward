import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import NavBar from "../Components/NavBar";

import "../App.css";
import FoodSearchWidget from "../Components/FoodSearchWidget";

function MapSearchPage() {
  const mapRef = useRef();
  const mapContainerRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia3dhbnJhYzIiLCJhIjoiY2x4Zzd2aWs3MHpyejJrcG9zdjVuN3Y0ayJ9.NpYBe00KtZ6Q00KmLqgm3A";
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-79.3958, 43.6635],
      zoom: 13,
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <>
      <NavBar />
      <FoodSearchWidget />
      <div id="map-container" ref={mapContainerRef} />
    </>
  );
}

export default MapSearchPage;
