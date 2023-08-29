import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return <div className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <h2>Malawi Youth Football Portal</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/agents"}>
                Agents
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to={"/teams"}>
                Teams
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}

export default Navbar
