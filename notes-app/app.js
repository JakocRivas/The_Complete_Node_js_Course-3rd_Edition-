const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Challenge: Add an option to yargs
// 
// 1. Setup a body option for the add command 
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!
// 
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title +'\nBody: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('removing a note!')
    }
})


// Create remove command
yargs.command({
    command: 'list',
    describe: 'Remove a note',
    handler: function() {
        console.log('listing notes!')
    }
})

// Create remove command
yargs.command({
    command: 'read',
    describe: 'Remove a note',
    handler: function() {
        console.log('reading a note!')
    }
})

// add, remove, read, list
// console.log(process.argv);
// console.log(yargs.argv)
yargs.parse();

