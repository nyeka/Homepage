import React from "react";
import About from "./components/about/About";
import Homepage from "./components/Homepage";
import Projects from "./components/project/Projects";

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
