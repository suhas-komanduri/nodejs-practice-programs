// Non-blocking File Read
const fs = require('fs');
console.log("Before file read");
fs.readFile('myFirst.js', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File Contents: " + data);
});
console.log("After file read");