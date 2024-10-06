import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import "../App.css";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    navigate("/search");
  };

  return (
    <>
      <NavBar />
      <div className="login-container">
        <div className="login-box">
          <h1>Sign in to Plate It Forward</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="username"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
            <button className="login-button" type="submit">
              Sign in
            </button>
            <div className="newaccount-group">
              <label>
                New to Plate it Forward? <Link to="/signup">Sign up</Link>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
