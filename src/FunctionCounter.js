import { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);
  const [nameOfCounter] = useState("Functional Counter");
  return (
    <div>
      <h3>{nameOfCounter}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default FunctionCounter;