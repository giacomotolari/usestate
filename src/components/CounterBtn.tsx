import { Dispatch, SetStateAction } from "react";

function CounterBtn({
  setCount,
}: {
  setCount: Dispatch<SetStateAction<number>>;
}) {
  const increment = () => {
    setCount((prevCount: number) => prevCount + 1);
  };

  return <button onClick={increment}>Increment</button>;
}

export default CounterBtn;
