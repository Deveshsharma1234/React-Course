import { useState, useCallback, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //use ref hook
  const passRef = useRef(null);
  const notify = () => {
    toast("Wow button clicked");
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]?/";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //her setPassword is given for optimisatin

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={() => {
            copyPasswordToClipboard();
            console.log("Button Clicked, Copy done");
          }}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLenght(e.target.value)}
          />
          <label htmlFor="">Length : {length}</label>
        </div>
        <div className="flex item-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Number Input</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="">Character Allowed</label>
        </div>
      </div>
    </>
  );
}

export default App;
