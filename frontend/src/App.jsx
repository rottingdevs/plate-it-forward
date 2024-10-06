import "mapbox-gl/dist/mapbox-gl.css";

import "./App.css";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage";
import MyListingsPage from "./Pages/MyListingsPage";
import LandingPage from "./Pages/LandingPage";
import MapSearchPage from "./Pages/MapSearchPage";
import AboutSDG from "./Pages/AboutSDG";

function App() {
  return (
    // add routers
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/search" element={<MapSearchPage />} />
        <Route path="/mylistings" element={<MyListingsPage />} />
        <Route path="/aboutsdg" element={<AboutSDG />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
