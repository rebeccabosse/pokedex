import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import axios from "axios";
import NavTypes from "./components/Types/NavTypes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavTypes />
    </div>
  );
}

export default App;
