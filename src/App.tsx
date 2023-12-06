import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <button onClick={increment}>count is {count}</button>
    </>
  );
}

export default App;
