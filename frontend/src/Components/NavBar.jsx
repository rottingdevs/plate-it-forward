import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src="./logo.svg" />
      <div className="navButtonsGroup">
        <a className="navButton" href="search">
          Search food
        </a>
        <a className="navButton" href="profile">
          My food
        </a>
        <a className="navButton" href="about">
          About SDG
        </a>
      </div>
    </div>
  );
}

export default NavBar;
