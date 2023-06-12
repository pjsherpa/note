import React, { useState, useEffect } from "react";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState("");
  const [notes, setNotes] = useState([
    { header: "Title", text: "add note here" },
  ]);

  const addnoteTitle = () => {
    const addTitle = [...notes, { header: headers }];
    setHeaders(addTitle);
  };
  useEffect(() => {
    const addText = [...notes, { text: input }];
    setNotes(addText);
  }, [headers]);

  const noteList = notes.map((item) => (
    <li key={item.headers}>
      {item.header}
      {item.text}
    </li>
  ));
  return (
    <>
      <div>
        <ol>{noteList}</ol>
      </div>
      <div>
        <input onChange={(e) => setHeaders(e.target.value)} />
        <input onChange={(e) => setInput(e.target.value)} />
        <button onClick={addnoteTitle}>Add Notes</button>
      </div>
    </>
  );
};

export default NoteInput;
