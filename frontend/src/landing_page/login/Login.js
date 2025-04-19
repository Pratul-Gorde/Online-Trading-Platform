import axios from "axios";
import React from "react";
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3002/loginUser", {
      email: email,
      password: password,
    },{ withCredentials: true } );
    if (response.data.success) {
        const authToken = response.data.authToken;
        localStorage.setItem("authToken", authToken);

        window.location.href = "http://localhost:3001";
      } else {
        alert("Login failed! Please check your credentials.");
      }
  };

  return (
    <div className="container mt-5 ">
      <h1 className="mb-5">Login in your account</h1>
      <form onSubmit={HandleLogin}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
