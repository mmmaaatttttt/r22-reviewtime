import { useState } from "react";
import NumberForm from "./NumberForm";
import NumberFactList from "./NumberFactList";

function Number() {
  const [facts, setFacts] = useState([]);

  const addFact = fact => {
    setFacts(oldFacts => [fact, ...oldFacts]);
  };

  return (
    <div>
      <NumberForm addFact={addFact} />
      <NumberFactList facts={facts} />
    </div>
  );
}

export default Number;
