import "./App.css";
import { useState } from "react";

interface Person {
  firstName: string;
  age: number;
  city?: string;
}

function App() {
  const [person, setPerson] = useState<Person>({
    firstName: "John",
    age: 20,
    city: "hamburg",
  });

  const handlePersonAge = () => {
    // copy if person obj and update the age key
    setPerson((prevPerson) => {
      const newPerson = {
        ...prevPerson,
        age: prevPerson.age + 1,
      };
      return newPerson;
    });
  };

  return (
    <>
      <p>firstName: {person.firstName}</p>
      <p>age: {person.age}</p>
      <p>city: {person.city}</p>
      <button onClick={handlePersonAge}>update person</button>
    </>
  );
}

export default App;
