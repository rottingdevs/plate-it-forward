import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import '../App.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    return (
        <>
        <NavBar />
          <div className="login-container">
            <div className="login-box">
              <h1>Sign in to Plate It Forward</h1>
              <form>
                <div className="input-group">
                  <label>Email address</label>
                  <input 
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <button className="login-button" type="submit">Sign in</button>
                <div className="newaccount-group">
                <label>New to Plate it Forward? <Link to="/signup">Sign up</Link>
                </label>
                </div>     
              </form>
            </div>
          </div>
        </>
      );      
    }

    export default LoginPage;