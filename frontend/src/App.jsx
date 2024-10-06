import "mapbox-gl/dist/mapbox-gl.css";

import "./App.css";
import MapSearch from "./Pages/MapSearchPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import MyListingsPage from "./Pages/MyListingsPage";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    // add routers
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<MapSearch />} />
        <Route path="/mylistings" element={<MyListingsPage />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
