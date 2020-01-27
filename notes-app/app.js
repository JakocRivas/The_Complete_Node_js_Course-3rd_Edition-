const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('adding a new note!')
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

// Challenge: Add two new commands
// 
//  1. Setup command to support "list" command (print place holder message for now)
//  2. Setup command to support "read" command (print placeholder message for now)
//  3. Test your work by running both commands and ensure correct output
// 
// 

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
console.log(yargs.argv)

