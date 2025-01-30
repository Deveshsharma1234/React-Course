import { useState } from "react";

import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  let [count, setCount] = useState(0);
  let [colour, setColour] = useState("Olive");
  let increment = () => {
    setCount(++count);
    console.log(count);
  };
  let decrement = () => {
    setCount(--count);
    console.log(count);
  };
  const handleButtonClick = () => {
    alert("Button Clicked");
  };
  const colorArr = ["RED", "BLUE", "GREEN", "PINK", "WHITE"];

  return (
    <>
      <div style={{ background: colour }}>
        <div className="bg-red-800 text-black p-4 rounded-xl">
          Testing Talvind
        </div>
        <div>Counter : {count}</div>
        <br />
        <br />
        <br />
        <button onClick={increment}>Increment</button>
        <br />
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        <Button
          onClick={() => {
            setColour("Red");
          }}
          color="Red"
        />
        <br />
        <Button
          onClick={() => {
            setColour("Silver");
          }}
          color="Silver"
        />
        <br />
        <Button
          onClick={() => {
            setColour("Blue");
          }}
          color="Blue"
        />
        <br />
        <Button
          onClick={() => {
            setColour("Pink");
          }}
          color="Pink"
        />
        <div style={{ background: "blue" }}>
          <div flex gap-x-4>
            {colorArr.map((color, index) => (
              <Button
                key={index}
                color={color}
                onClick={() => {
                  setColour(color);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
