// Blocking vs Non-blocking Code
const fs = require('fs');
// Blocking code example
console.log("Start of blocking code");
const data = fs.readFileSync('myFirst.js', 'utf8'); // Blocks here
console.log("Blocking Operation completed!");

//Non-blocking code example
console.log("Start of non-blocking code:");
fs.readFile('myFirst.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Non-blocking code completed!");
});
console.log("This runs before the file is read");