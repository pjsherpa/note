import React, { useState, useEffect } from "react";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState("");
  const [notes, setNotes] = useState([{ header: "headers", text: "text" }]);
  const [notePop, setNotePop] = useState(0);

  useEffect(() => {
    setNotePop(notePop + 1);
  }, [notes]);

  const addnoteTitle = (e) => {
    e.preventDefault();
    const newNote = { header: headers, text: input };
    setNotes([...notes, newNote]);
    setInput("");
    setHeaders("");
  };

  const noteList = notes.map((item) => (
    <li key={item.headers}>
      <button>{item.header}</button>
      {item.text}
    </li>
  ));
  return (
    <div>
      <h4>Note:{notePop}</h4>
      <div>
        <ol>{noteList}</ol>

        <form style={{ textAlign: "center" }} onSubmit={addnoteTitle}>
          <div>
            {" "}
            <input
              placeholder={"Title"}
              value={headers}
              onChange={(e) => setHeaders(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder={"add note here"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Notes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteInput;
