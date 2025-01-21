import React, { useState } from 'react';
import axios from "axios";
import Success from '../components/Success';
import Loader from "../components/Loader";
import Error from "../components/Error";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  async function register() {
    if (password === cpassword) {
      const user = {
        name,
        email,
        password,
      };

      console.log(user);

      try {
        setLoading(true);
        const result = await axios.post("/api/users/register", user);
        console.log(result)
        setLoading(false);
        setSuccess(true);

        setName("");
        setEmail("");
        setPassword("");
        setCPassword("");
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Passwords do not match");
    }
  }

  return (
    <div className="register-container">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-12">
          {success && <Success message="Registration Successful!" />}
          {error && <Error message="Something went wrong" />}
          <div className="register-card">
            <h2 className="register-title">Create Account</h2>
            <p className="register-subtitle">Join us and start booking!</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control register-input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control register-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control register-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control register-input"
                placeholder="Confirm your password"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary register-button" onClick={register}>
              Register
            </button>
            <p className="register-footer">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
