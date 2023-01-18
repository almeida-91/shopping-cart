import React from "react";
import RouteSwitch from "./components/RouteSwitch";
import "./app.css";
import gitIcon from "./components/images/github.png";

function App() {
  return (
    <div>
      <h1 className="header"> Generic Shop</h1>
      <RouteSwitch />
    </div>
  );
}

export default App;
