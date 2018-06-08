const yargs = require('yargs');

const notes = require('./notes');

const commands = {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't',
    },
    body: {
        describe: 'The body of the note',
        demand: true,
        alias: 'b',
    },
};

const argv = yargs
    .command('add', 'Add a new note', {
        ...commands,
    })
    .command('list', 'List all notes')
    .command('read', 'Read a new note', {
        title: commands.title,
    })
    .command('remove', 'Remove a new note', {
        title: commands.title,
    })
    .help().argv;
const command = argv._[0];

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    return note
        ? notes.printNote(note)
        : console.log('That note already exist!');
}

if (command === 'list') {
    const allNotes = notes.getAll();
    return allNotes.forEach(note => notes.printNote(note));
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
