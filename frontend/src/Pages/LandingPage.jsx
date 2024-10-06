import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import "../App.css";

function LandingPage() {
  const state = true;

  return (
    <>
      <NavBar />
      <div className="full-screen-image">
        <img src="./landing.jpg" alt="Full Screen" className="image" />
        <div className="overlay">
          <h1 className="text">Welcome to Our Site</h1>
          <Link to="/login" className="link"> {/* Use Link for navigation */}
            <button className="sign-in-button">Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
