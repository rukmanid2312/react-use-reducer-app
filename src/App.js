import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter/Counter";
import ToDos from "./ToDos/ToDos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>current count is : {count}</div>
      <button
        onClick={(e) => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
      <Counter />
      <ToDos />
    </div>
  );
}

export default App;
