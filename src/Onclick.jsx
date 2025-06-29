import { useState } from "react";

function Onclick() {
  const [note, setNote] = useState("");

  const handleClick = () => {
    setNote("You clicked the button!");
  };

  return (
    <div>
      <p style={{ border: "2px solid black" }}>{note}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Onclick;
