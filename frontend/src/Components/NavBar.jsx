import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="./logo.svg" />
      </Link>
      <div className="navButtonsGroup">
        <a className="navButton" href="search">
          Search food
        </a>
        <a className="navButton" href="mylistings">
          My food
        </a>
        <a className="navButton" href="aboutsdg">
          About SDG
        </a>
      </div>
    </div>
  );
}

export default NavBar;
