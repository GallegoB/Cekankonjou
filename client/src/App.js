import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const handleClick = async () => {
    const data = await window.fetch("/api/server");
    const json = await data.json();
    console.log(json);
    const msg = json[0].nameJeu;
    setMsg(msg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={handleClick}>dis Bonjour</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
