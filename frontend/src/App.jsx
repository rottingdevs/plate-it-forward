import "mapbox-gl/dist/mapbox-gl.css";

import "./App.css";
import MapSearch from "./Pages/MapSearchPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import MyListingsPage from "./Pages/MyListingsPage";

function App() {
  return (
    // add routers
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapSearch />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<MapSearch />} />
        <Route path="/mylistings" element={<MyListingsPage />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
