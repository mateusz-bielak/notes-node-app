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

    isNoteDuplicate.length > 0
        ? console.log('That note already exist!')
        : saveNotes([...notes, newNote]);
};

const getAll = () => {
    console.log('Getting all notes');
};

const readNote = title => {
    console.log('Reading note', title);
};

const removeNote = title => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
};
