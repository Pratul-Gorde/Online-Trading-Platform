import axios from "axios";
import React from "react";
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (event) => {
    event.preventDefault();
    try{
    const response = await axios.post("https://online-trading-platform-oic8.onrender.com", {
      email: email,
      password: password,
    }, { withCredentials: true });
    if (response.data.success) {   
      const authToken = response.data.authToken;
      localStorage.setItem("authToken", authToken);

      window.location.href = "https://online-trading-platform-1.onrender.com";
    } 
  }catch(error){
     if (error.response && error.response.data && error.response.data.err) {
      alert(error.response.data.err); // Show backend message
    } else {
      alert("Something went wrong. Please try again later.");
    }
  }
  }
  
  return (
    <div className="container mt-5 ">
      <h1 className="mb-5">Login in your account</h1>
      <form onSubmit={HandleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
