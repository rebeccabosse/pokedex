import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import RouteConfig from "./components/Routes/RouteConfig";

function App() {
  return (
    <div className="App">
      <RouteConfig />
      <Home />
    </div>
  );
}

export default App;
