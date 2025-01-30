import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "tailwindcss";

function App() {
  let [counter, setCounter] = useState(1);

  //this will not work as ui updation is done by react
  const addValue = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter++);
    }
  };
  const minusValue = () => {
    if (counter >= 0) setCounter(counter--);
  };

  return (
    <>
      <h1 className="bg-red-100">Chai or React</h1>
      <h2>Cunter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <h2></h2>
      <button onClick={minusValue}>Decrease Value</button>
    </>
  );
}
3;

export default App;
