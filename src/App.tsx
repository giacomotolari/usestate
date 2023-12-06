import "./App.css";
import { useState } from "react";
import CounterBtn from "./components/CounterBtn";


// Pass the setCount function as a prop to the CounterBtn component.
// In the CounterBtn component, use the setCount function to update the count state.

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>count is {count}</p>
      <CounterBtn setCount={setCount}/>
    </>
  );
}

export default App;
