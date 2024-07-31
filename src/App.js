import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TypeBar from "./components/Types/TypeBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TypeBar />
      <Home />
    </div>
  );
}

export default App;
