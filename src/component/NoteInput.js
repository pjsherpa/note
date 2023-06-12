import React, { useState } from "react";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([
    { header: "Note", text: "add note here" },
  ]);

  const addHeader = () => {
    const addText = [...notes, { header: input[0].header }];
    setNotes(addText);
  };

  const addNote = () => {
    const addText = [...notes, { text: input[0].text }];
    setNotes(addText);
  };

  const noteList = notes.map((item) => (
    <li key={item.header}>
      <button>{item.header}</button>
      {item.text}
    </li>
  ));
  return (
    <>
      <div>
        <ol>{noteList}</ol>
      </div>
      <div>
        <input onChange={(e) => setInput(e.target.value)} />
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={addHeader}>Add Notes</button>
      </div>
    </>
  );
};

export default NoteInput;
