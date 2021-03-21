import React, { useState } from "react";
import "./App.css";
import { asteriskRepeat } from "./utils/stringUtils";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isMainBackGroundColor, setIsMainBackGroundColor] = useState(true);

  return (
    <div
      style={{ backgroundColor: isMainBackGroundColor ? "white" : "darkgray" }}
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
          onClick={() => setIsMainBackGroundColor(!isMainBackGroundColor)}
        >
          Change background color
        </button>
        <p>{username}</p>
        <p>{showPassword ? password : asteriskRepeat(password.length)}</p>
      </div>
    </div>
  );
};

export default App;
