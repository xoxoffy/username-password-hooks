import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [changeBackgroundColor, setChangeBackgroundColor] = useState(true);

  return (
    <div
      style={{ backgroundColor: changeBackgroundColor ? "white" : "darkgray" }}
    >
      <div className="App">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          Show/Hide password
        </button>
        <button
          type="button"
          onClick={() => setChangeBackgroundColor(!changeBackgroundColor)}
        >
          Change background color
        </button>
        <p>{username}</p>
        <p>{showPassword ? password : "*".repeat(password.length)}</p>
      </div>
    </div>
  );
};

export default App;
