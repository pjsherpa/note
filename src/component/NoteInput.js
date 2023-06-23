import React, { useState, useEffect } from "react";
import "./NoteInputStyle.css";
//Functionality first and then style upgrade after component splitting.
//edit header as well
//component splitting once functionality is made.

const NoteInput = () => {
  const [input, setInput] = useState("");
  const [headers, setHeaders] = useState("");
  const [notes, setNotes] = useState([
    { header: "headers", text: "text" },
    { header: "headers2", text: "text2" },
  ]);
  const [notePop, setNotePop] = useState(0);
  const [selectedNote, setSelectedNote] = useState(0);
  const [showText, setShowText] = useState(false);
  const [edit, setEdit] = useState("");

  const addnoteTitle = (e) => {
    if (headers === "" && input === "") {
      alert("Please add required information");
    } else {
      e.preventDefault();
      const newNote = { header: headers, text: input };
      setNotes([...notes, newNote]);
      setInput("");
      setHeaders("");
    }
  };
  useEffect(() => {
    setNotePop(notePop + 1);
  }, [notes]);

  const handleButtonClickShow = (header) => {
    setSelectedNote(header);
    setShowText(!showText);
  };

  const handleDoneButtonClick = () => {
    //fix this need to split and create edit button
    const updateNote = notes.map((item) => {
      if (item.header === selectedNote) {
        return {
          ...notes,
          header: headers,
          text: edit,
        };
      }
      return item;
    });
    setNotes(updateNote);
    setShowText(null);
    setEdit("");
  };

  const handleDeletebuttonClick = (header) => {
    const remove = notes.filter((notes) => header !== notes.header);
    setNotes(remove);
  };

  const noteList = notes.map((item) => {
    return (
      <li key={item.headers}>
        <button
          className="button"
          onClick={() => handleButtonClickShow(item.header)}
        >
          <span>{item.header}</span>
        </button>
        {selectedNote === item.header && showText && (
          <div>
            <textarea
              className="text"
              placeholder={item.text}
              value={item.edit}
              onChange={(e) => setEdit(e.target.value)}
            ></textarea>{" "}
            <button onClick={handleDoneButtonClick} value={edit}>
              Done
            </button>
            <button
              className="deleteButton"
              onClick={() => handleDeletebuttonClick(item.header)}
            >
              Delete
            </button>
          </div>
        )}
      </li>
    );
  });
  return (
    <div>
      <header className="header">note</header>
      <h4 className="noteHeader">
        <i>Note:{notePop}</i>
      </h4>
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
