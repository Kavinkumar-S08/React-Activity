import React, { useState } from "react";
import { isEmail, validatePassword } from "../utils/validate";
import "../styles/styles.css";

export default function Login({ onLogin }) {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") {
      setError("Enter a valid username or email.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 6+ chars with uppercase, lowercase, number & special character."
      );
      return;
    }

    setError("");
    onLogin(userInput);
  };

  return (
    <div className="login-container fade-in">
      <div className="login-box glass">
        <h2 className="login-title">Welcome Back</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Username"
            className="input-field"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error-msg">{error}</p>}

          <button className="login-btn glow-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
