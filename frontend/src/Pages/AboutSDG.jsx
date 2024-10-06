import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import "../App.css";

function AboutSDG() {
  return (
    <>
      <NavBar />
      <div className="scroll">
        <div className="aboutsdg">
          <img
            src="./sdg.png"
            alt="SDG"
            style={{ width: "300px", paddingTop: "30px" }}
          />
          <div className="">
            <h1 style={{ paddingTop: "0px"}}>Building a more sustainable food future.</h1>
            <p>
              The 2030 Agenda for Sustainable Development, adopted by all United
              Nations Member States in 2015, provides a shared blueprint for
              peace and prosperity for people and the planet, now and into the
              future.
            </p>
            <p style={{ fontWeight: "600" }}>
              Plate it Forward aims to support the following Sustainable
              Development Goals:
            </p>
            <ol>
              <li>
                Goal 2. End hunger, achieve food security and improved nutrition
                and promote sustainable agriculture
              </li>
              <li>
                Goal 3. Ensure healthy lives and promote well-being for all at
                all ages
              </li>
              <li>
                Goal 12. Ensure sustainable consumption and production patterns
              </li>
            </ol>
            <Link to="/search" className="link">
              <button className="sign-in-button" style={{ marginTop: "20px", marginBottom:"50px" }}>
                Join the mission
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSDG;
