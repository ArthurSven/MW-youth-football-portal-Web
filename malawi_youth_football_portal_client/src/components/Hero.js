import React from 'react'
import Greeting from './Greeting'; // Import the Greeting component
import './../assets/css/HeroSection.css';
import { Link } from "react-router-dom";

function Hero() {
  return <div className="hero-container">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div className="mask text-center p-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", padding: "1rem", width: "80%" }}>
          <div class="text-white align-items-center">
            <h1 className="mb-3">
              <Greeting />
            </h1>
            <p className="mb-4">
              Welcome to the portal where we never let a talented youth
              players go unnoticed. Sign up either as an Agent or a team!
            </p>
              <Link to="/agents" className="btn btn-outline-light btn-lg m-2">
                Agents Section
              </Link>
            <Link to="/teams" className="btn btn-outline-light btn-lg m-2">
              Teams Section
            </Link>
          </div>
        </div>
      </div>
    </div>;
  
}


export default Hero
