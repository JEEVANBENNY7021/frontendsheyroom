import React, { useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Loginscreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function Login() {
    const user = {
      email,
      password,
    };

    try {
      setLoading(true);
      const result = (await axios.post("/api/users/login", user)).data;
      setLoading(false);

      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(true);
    }
  }

  return (
    <div className="login-container">
      {loading && <Loader />}
      <div className="row justify-content-center">
        <div className="col-md-12">
          {error && <Error message="Invalid Credentials" />}
          <div className="login-card">
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Please login to your account</p>
            <div className="form-group">
              <input
                type="email"
                className="form-control login-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control login-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn btn-primary login-button" onClick={Login}>
              Login
            </button>
            <p className="login-footer">
              Don't have an account? <a href="/register">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
