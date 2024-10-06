import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import '../App.css';
import { Link } from 'react-router-dom';

function SignUpPage() {
    const [email, setEmail] = useState('');
    return (
        <>
        <NavBar />
          <div className="login-container">
            <div className="login-box">
              <h1>Sign up for Plate It Forward</h1>
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
                  <label>Create Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <button className="login-button" type="submit">Sign up</button>
                <div className="newaccount-group">
                <label>Already have an account? <Link to="/login">Sign in</Link>
                </label>
                </div>     
              </form>
            </div>
          </div>
        </>
      );      
    }

    export default SignUpPage;