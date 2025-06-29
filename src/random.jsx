import { useState } from "react";

function Rand() {
  const [number, setNumber] = useState(0);

  const generateRandom = () => {
    setNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p id="no">{number}</p>
      <button onClick={generateRandom}>Generate Random Number</button>
    </div>
  );
}

export default Rand;
