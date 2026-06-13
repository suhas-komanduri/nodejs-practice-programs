// Synchronous File Read
const fs = require('fs');

console.log("1. Starting sync read...");
const data = fs.readFileSync('myFile.txt', 'utf8');
console.log("2. File Contents: ", data);
console.log("3. Done Reading File.");

//Asynchronous File Read
console.log("1. Starting Async Read...");
fs.readFile('myFile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("2. File Contents: ", data);
});

console.log("3. Done with read operation");