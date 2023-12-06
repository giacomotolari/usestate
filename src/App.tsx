import "./App.css";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const handleNumbers = () => {
    setNumbers((prevNumbers) => [...prevNumbers, 6])
  }

  return (
    <>
      <p>count is {numbers}</p>
      <button onClick={handleNumbers}>update numbers</button>
    </>
  );
}

export default App;
