function NumberFactList({ facts }) {
  return (
    <ul>
      {facts.map(fact => (
        <li key={fact.text}>{fact.text}</li>
      ))}
    </ul>
  );
}

export default NumberFactList;
