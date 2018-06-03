console.log('Starting app.');

const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];
console.log(`Command: ${command}`);
console.log('Yarg', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}
