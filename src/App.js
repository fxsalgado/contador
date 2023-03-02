import {React, useState} from "react";
import './App.css';

function App() {

  const[cont, setCont] = useState(0);

  const sum = () => {
    setCont(cont +1);
  }

  const reset = () => {
    setCont(0);
  }

  const restar = () => {
    setCont(cont-1);
  }

  return (
    <>
      <h1>contador</h1>
      <h2>{cont}</h2>
      <button onClick={sum}>Aumentar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={restar}>Diminuir</button>

    </>
  );
}

export default App;
