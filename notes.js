console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    const note = {
        title,
        body,
    };

    const isDuplicate = notes => notes.filter(note => note.title === title);

    const writeFileSync = notes =>
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));

    try {
        const getNotes = fs.readFileSync('notes-data.json');
        const notes = JSON.parse(getNotes);

        isDuplicate(notes).length > 0
            ? console.log('That note already exist!')
            : writeFileSync([...notes, note]);
    } catch (error) {
        error.code === 'ENOENT' && writeFileSync([note]);
    }
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
