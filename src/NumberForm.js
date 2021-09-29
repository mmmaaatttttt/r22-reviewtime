import { useState } from "react";

function NumberForm({ addFact }) {
  const [num, setNum] = useState("");

  const handleChange = evt => {
    setNum(evt.target.value);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const response = await fetch(`http://numbersapi.com/${num}?json`);
    const body = await response.json();
    addFact(body);
    setNum("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={num} onChange={handleChange} name="num" />
      <button>Get a fact for this number!</button>
    </form>
  );
}

export default NumberForm;
