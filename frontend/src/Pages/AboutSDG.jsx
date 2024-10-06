import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import "../App.css";

function AboutSDG() {
  return (
    <>
      <NavBar />
      <div className="aboutsdg">
        <img src="./sdg.png" alt="SDG" style={{width:"300px"}} />
        <div className="">
          <h1 className="text">Together, Let’s Plate It Forward!</h1>
          <Link to="/login" className="link"> {/* Use Link for navigation */}
            <button className="sign-in-button">Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutSDG;
