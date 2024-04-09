import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const x = 10;
  const a = 20;

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {[1, 2, 3, 4, 5].map((num) => {
            return <li>jwoe</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
