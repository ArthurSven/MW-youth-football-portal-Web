import React from 'react'
import "./../assets/css/TeamSection.css";


function Teams() {
  return (
    <div>
      <div className="p-5 bg-image team-container">
        <h1>Team Section</h1>
        <div className="d-flex justify-content-around align-items-start" style={{ marginTop: "1rem" }}>
          <div className="card shadow-lg" style={{ width: "30%", padding: "3rem" }}>
            <h3 className="text-center">Team Section Brief</h3>
          </div>
          <div className="card shadow-lg" style={{ width: "30%", padding: "2rem" }}>
            <h3 className="text-center">Team Section Login</h3>
            <form style={{ marginTop: "1rem" }}>
              <div className="form-group mb-3">
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Email" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="password" placeholder="Password" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <button className="btn btn-primary form-control" style={{ padding: "1rem" }}>
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="card shadow-lg" style={{ width: "30%", padding: "2rem" }}>
            <h3 className="text-center">Team Section Registration</h3>
            <form style={{ marginTop: "1rem" }} >
              <div className="form-group mb-3">
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Full team name" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="email" placeholder="Email" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="City" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Password" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="password" placeholder="Confirm Password" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <button className="btn btn-primary form-control" style={{ padding: "1rem" }}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams