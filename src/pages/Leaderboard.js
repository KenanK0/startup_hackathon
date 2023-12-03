import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Leaderboard.css";

const users = [
  { name: "Thato", scans: 20 },
  { name: "Rorisang", scans: 15 },
  { name: "Melusi", scans: 25 },
  { name: "Matthew", scans: 27 },
  { name: "Rayleigh", scans: 11 },
];

function Leaderboard() {
  // Using state to store the sorted users
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    // Sort users and update state
    const sorted = [...users].sort((a, b) => b.scans - a.scans);
    setSortedUsers(sorted);
  }, []);

  // Function to render the medal emoji based on rank
  const renderMedal = (index) => {
    switch (index) {
      case 0: return "🥇";
      case 1: return "🥈";
      case 2: return "🥉";
      default: return null;
    }
  };

  return (
    <>
      <Header />
      <div>
        <header className="links">
          <nav className="hyperlinks">
            <a href="#" className="placeholder-1">
              Placeholder1
            </a>
            <a href="#" className="placeholder-2">
              Placeholder2
            </a>
          </nav>
        </header>
        <br />
        <div className="leaderboard">
          <h1>Waste Scanning Leaderboard 🏆</h1>
          <table id="leaderboardTable">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Scans</th>
              </tr>
            </thead>
            <tbody id="leaderboardBody">
              {sortedUsers.map((user, index) => (
                <tr key={user.name}>
                  <td>{index + 1} {renderMedal(index)}</td>
                  <td>{user.name}</td>
                  <td>{user.scans}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
