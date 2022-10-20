import React from "react";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  return (

    <div>
    <h1> Generic Shop</h1>

    <nav>
        <a>Home</a> |
        <a> Shop</a>
    </nav>
    <RouteSwitch />
</div>
  );
}

export default App;
