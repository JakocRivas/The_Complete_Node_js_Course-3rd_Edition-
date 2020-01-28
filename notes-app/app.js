const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//
// Challenge: Setup command option and function
//
// 1. Setup the remove command to take a required --title="some title"
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"
//
//
// Challenge: Wire up remove notes
//
// 1. Load existing notes
// 2. Use array filter method to remove to the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist
//
//
// Challenge: Use chalk to provide useful logs for remove
//
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found!" with a red background
//
//
// Customize yargs version
yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
    console.log("Title: " + argv.title + "\nBody: " + argv.body);
  }
});

// Create remove command
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  describe: "Remove a note",
  handler: function(argv) {
    notes.removeNote(argv.title, argv.body);
    console.log("Title: " + argv.title + "\nBody: " + argv.body);
  }
});

// Create remove command
yargs.command({
  command: "list",
  describe: "Remove a note",
  handler: function() {
    console.log("listing notes!");
  }
});

// Create remove command
yargs.command({
  command: "read",
  describe: "Remove a note",
  handler: function() {
    console.log("reading a note!");
  }
});

// add, remove, read, list
// console.log(process.argv);
// console.log(yargs.argv)
yargs.parse();
