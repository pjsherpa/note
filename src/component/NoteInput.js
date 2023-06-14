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
      <h1>{notePop}</h1>
      <div>
        <ol>{noteList}</ol>

        <form style={{ textAlign: "center" }} onSubmit={addnoteTitle}>
          <input
            placeholder={"Title"}
            value={headers}
            onChange={(e) => setHeaders(e.target.value)}
          />
          <textarea
            placeholder={"add note here"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Add Notes</button>
        </form>
      </div>
    </div>
  );
};

export default NoteInput;
