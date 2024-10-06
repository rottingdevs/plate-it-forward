import "mapbox-gl/dist/mapbox-gl.css";

import "./App.css";
import MapSearch from "./Pages/MapSearchPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // add routers
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapSearch />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<MapSearch />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
