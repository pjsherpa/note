import React, { useState } from "react";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState("");
  const [notes, setNotes] = useState([
    { header: "Title", text: "add note here" },
  ]);

  const addnoteTitle = (e) => {
    e.preventDefault();
    const newNote = { header: headers, text: input };
    setNotes([...notes, newNote]);
  };

  const noteList = notes.map((item) => (
    <li key={item.headers}>
      <button>{item.header}</button>
      {item.text}
    </li>
  ));
  return (
    <div>
      <div>
        <ol>{noteList}</ol>

        <form style={{ textAlign: "center" }} onSubmit={addnoteTitle}>
          <input value={headers} onChange={(e) => setHeaders(e.target.value)} />
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">Add Notes</button>
        </form>
      </div>
    </div>
  );
};

export default NoteInput;
