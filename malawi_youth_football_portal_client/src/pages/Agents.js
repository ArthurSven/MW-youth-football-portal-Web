import React, { useState } from 'react'
import  './../assets/css/AgentSection.css'
import axios from "axios";  

function Agents() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
  });

  const [message, setMessage] = useState(""); // Define message state
  const [error, setError] = useState(""); // Define error state

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  //Register agent
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4500/insert-agent", formData);

      if (response.status === 200) {
        setMessage(response.data.message); // Set success message
        setError(""); // Clear error message
      } else {
        setMessage(""); // Clear success message
        setError("An error occurred while submitting the form."); // Set error message
      }
    } catch (error) {
      console.error("Axios Error:", error);
      setMessage("");
      setError("An error occurred while submitting the form."); // Set fetch error message
    }

  };

  //login agent
  
  return <div>
      <div className="p-5 bg-image agent-container">
        <h1>Agent Section</h1>
        <div className="d-flex justify-content-around align-items-start" style={{ marginTop: "1rem" }}>
          <div className="card shadow-lg" style={{ width: "30%", padding: "3rem" }}>
            <h3 className="text-center">Agent Section Brief</h3>
          </div>
          <div className="card shadow-lg" style={{ width: "30%", padding: "2rem" }}>
            <h3 className="text-center">Agent Section Login</h3>
            <form style={{ marginTop: "1rem" }}>
              <div className="form-group mb-3">
                <input className="form-control" style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Username" />
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
            <h3 className="text-center">Agent Section Registration</h3>
            <div className="form-group mb-4" style={{ marginTop: "1px" }}>
              {message && <span className="text-success">
                  {message}
                </span>}
              {error && <span className="text-danger">
                  {error}
                </span>}
            </div>
            <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input className="form-control" name="firstname" value={formData.firstname} required="required" onChange={handleChange} style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Firstname" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" name="lastname" value={formData.lastname} required="required" onChange={handleChange} style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Lastname" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" name="email" value={formData.email} required="required" onChange={handleChange} style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="email" placeholder="Email" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" name="username" value={formData.username} required="required" onChange={handleChange} style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="text" placeholder="Username" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <input className="form-control" name="password" value={formData.password} required="required" onChange={handleChange} style={{ backgroundColor: "#CCCCCC", padding: "15px" }} type="password" placeholder="Password" />
              </div>
              <div className="form-group mb-4" style={{ marginTop: "2rem" }}>
                <button className="btn btn-primary form-control" type="submit" style={{ padding: "1rem" }}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>;
}

export default Agents