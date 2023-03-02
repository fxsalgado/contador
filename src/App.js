import Boton from "./components/Boton";
import {useState} from "react";
import "./App.css"


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
      <Boton manexador={sum} texto={"Aumento"}/>
      <Boton manexador={reset} texto={"Resetea"}/>
      <Boton manexador={restar} texto={"Decremento"}/>
    </>
  )
}

export default App;
