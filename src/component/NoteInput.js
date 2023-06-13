import React, { useState } from "react";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState("");
  const [notes, setNotes] = useState([
    { header: "Title", text: "add note here" },
  ]);

  const addnoteTitle = (e) => {
    e.preventDefault();
    const addTitle = [...notes, { header: headers, text: input }];
    console.log(addTitle);
  };

  const noteList = notes.map((item) => (
    <li key={item.headers}>
      {item.header}
      {item.text}
    </li>
  ));
  return (
    <div>
      <div>
        <ol>{noteList}</ol>

        <form style={{ textAlign: "center" }}>
          <input value={headers} onChange={(e) => setHeaders(e.target.value)} />
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button onSubmit={addnoteTitle}>Add Notes</button>
        </form>
      </div>
    </div>
  );
};

export default NoteInput;
