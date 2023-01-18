import React from "react";
import RouteSwitch from "./components/RouteSwitch";
import "./app.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <h1 className="header"> Generic Shop</h1>
      <RouteSwitch />
      <Footer />
    </div>
  );
}

export default App;
