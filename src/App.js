import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const handleSubmit = () => {
    console.log("Clicked");
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with doc
        </a>
        <h3>Text from the master branch</h3>
      </header>
    </div>
  );
}

export default App;
