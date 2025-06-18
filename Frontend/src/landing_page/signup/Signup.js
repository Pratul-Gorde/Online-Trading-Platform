import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () =>{
  const res = await axios.post("http://localhost:3002/addNewUser", {
    email: user,
    password: password,
  },
);
};

  return (
    <div className="container mt-5">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUser(e.target.value)}
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
        <button type="submit" class="btn btn-primary" onClick={handleSignup} >
          Signup
        </button>
      </form>
    </div>
    
  );
}

export default Signup;
