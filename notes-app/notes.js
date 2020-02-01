const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    savedNotes(notes);
    console.log("New Note Added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notesToKeep.length !== notes.length) {
    savedNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed " + title));
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const savedNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("note.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("note.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
