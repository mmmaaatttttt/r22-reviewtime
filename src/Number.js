import { useState, useEffect } from "react";
import NumberForm from "./NumberForm";
import NumberFactList from "./NumberFactList";

function Number() {
  const [facts, setFacts] = useState([]);
  const [randomFact, setRandomFact] = useState(null);
  // console.log("i'm rendering number");

  // useEffect(() => {
  //   console.log("i'm an effect!!!");
  // });

  useEffect(() => {
    // console.log("i'm number's useEffect");
    async function getRandomFact() {
      const response = await fetch(`http://numbersapi.com/random/trivia?json`);
      const body = await response.json();
      setRandomFact(body);
    }
    getRandomFact();
  }, []);

  const addFact = fact => {
    setFacts(oldFacts => [fact, ...oldFacts]);
  };

  return (
    <div>
      <div>
        Here's a random fact: <p>{randomFact?.text}</p>
      </div>
      <NumberForm addFact={addFact} />
      <NumberFactList facts={facts} />
    </div>
  );
}

export default Number;
