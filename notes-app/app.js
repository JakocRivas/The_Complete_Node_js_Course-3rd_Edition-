const notes = require('./notes.js');
const chalk = require('chalk');

const note = notes();
console.log(note);
console.log(chalk.green.bold.inverse("Success!"));
//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inverse.