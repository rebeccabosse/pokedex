import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Types from "./components/Types";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Types />
      <Home />
    </div>
  );
}

export default App;
