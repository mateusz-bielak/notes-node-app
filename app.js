const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    return note
        ? notes.printNote(note)
        : console.log('That note already exist!');
}

if (command === 'list') {
    return notes.getAll();
}

if (command === 'read') {
    const note = notes.readNote(argv.title);

    if (!note) {
        return console.log('Note not found!');
    }
    return notes.printNote(note);
}

if (command === 'remove') {
    const note = notes.removeNote(argv.title);
    return note
        ? console.log('Note removed:', note.title)
        : console.log('Note not found!');
}

console.log('Command not recognized');
