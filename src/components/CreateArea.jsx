import React, { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function CreateArea(props) {
  const [note, setNote] = useState({
    titleText: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAddNote(note);
    setNote({
      titleText: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="titleText"
          onChange={handleChange}
          value={note.titleText}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Keep something inspiring here..."
          rows="3"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
