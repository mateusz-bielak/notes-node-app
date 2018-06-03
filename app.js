const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log('Yarg', argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    note
        ? console.log('Note created:', note.title, note.body)
        : console.log('That note already exist!');
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    const note = notes.removeNote(argv.title);
    note
        ? console.log('Note removed:', note.title)
        : console.log('Note not found!');
} else {
    console.log('Command not recognized');
}
