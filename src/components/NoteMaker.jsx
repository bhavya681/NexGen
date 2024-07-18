import React, { useState } from "react";

const NoteMaker = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleAddNote = () => {
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote("");
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="note-maker p-4 bg-green-500 text-white rounded-lg shadow-lg mb-4 lg:mb-0 lg:mr-4 lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Note Maker</h2>
      <textarea
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        className="w-full p-2 mb-4 bg-green-600 rounded-lg text-white"
        placeholder="Write your note here..."
      />
      <button
        onClick={handleAddNote}
        className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-white"
      >
        Add Note
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Your Notes</h3>
        <ul>
          {notes.map((note, index) => (
            <li
              key={index}
              className="mb-2 p-3 bg-green-600 rounded-lg flex justify-between items-center"
            >
              <span className="text-white">{note}</span>
              <button
                onClick={() => handleDeleteNote(index)}
                className="bg-red-600 px-2 py-1 rounded-lg hover:bg-red-700 transition-colors text-white"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteMaker;
