console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const getNotes = fs.readFileSync('notes-data.json');
        return JSON.parse(getNotes);
    } catch (e) {
        return [];
    }
};

const saveNotes = notes =>
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

const addNote = (title, body) => {
    const notes = fetchNotes();
    const newNote = {
        title,
        body,
    };

    const isNoteDuplicate = notes.filter(note => note.title === title);

    if (isNoteDuplicate.length === 0) {
        saveNotes([...notes, newNote]);
        return newNote;
    }
};

const getAll = () => {
    console.log('Getting all notes');
};

const readNote = title => {
    console.log('Reading note', title);
};

const removeNote = title => {
    const notes = fetchNotes();
    const noteToRemove = notes.filter(note => note.title === title);

    if (noteToRemove.length === 1) {
        const remainingNotes = notes.filter(note => note.title !== title);

        saveNotes(remainingNotes);
        return noteToRemove[0];
    }
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
};
