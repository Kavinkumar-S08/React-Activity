import React, { useEffect, useState } from "react";
import "../styles/styles.css";

export default function Dashboard({ user, logout }) {
  const username = user.includes("@") ? user.split("@")[0] : user;

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const old = JSON.parse(localStorage.getItem("loginHistory")) || [];

    const newEntry = {
      user: username,
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    };

    const updated = [newEntry, ...old];
    setHistory(updated);

    localStorage.setItem("loginHistory", JSON.stringify(updated));
  }, [username]);

  return (
    <div className="dashboard-container fade-in">
      <div className="dashboard-header">
        <div className="profile-circle">{username[0].toUpperCase()}</div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-box glass pop-in">
        <h1 className="dashboard-title">Welcome to the World of CSE!</h1>
        <p className="dashboard-user">Logged in as <b>{username}</b></p>

        <h2 className="history-title">Login History</h2>

        <div className="history-list">
          {history.map((h, index) => (
            <div key={index} className="history-item hover-card">
              <b>{h.user}</b>
              <span>{h.time} — {h.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
