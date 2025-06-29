import { IoIosAddCircle } from "react-icons/io";
function Input({ input, setInput, addNote, clearNotes }) {
  const clearNote = () => {
    setInput("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          className="col-6"
          value={input}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a note"
          style={{ height: "50px", padding: "20px" }}
        />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success"
          style={{ padding: "5px 5px", margin: "5px 5px", width: "100px" }}
          onClick={addNote}
        >
          <IoIosAddCircle />
        </button>
        <button
          type="button"
          className="btn btn-warning"
          style={{ padding: "5px 5px", margin: "5px 5px", width: "100px" }}
          onClick={clearNote}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
}
export default Input;
