import React from "react";
import Note from "./Note";

const List = ({ noteToShow, toggleImportanceOf }) => {
  return (
    <ul>
      {noteToShow.map((note) => (
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}
        />
      ))}
    </ul>
  );
};

export default List;
