// Reading Files using Promise
const fs = require('fs').promises;
const promise1 = Promise.resolve('First Result.');
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second Result.'), 1000));
const promise3 = fs.readFile('myFile.txt', 'utf8'); // Read local file instead of fetch

Promise.all([promise1, promise2, promise3])
.then(results => {
    console.log("Results: ", results);
    // results[0] is from promise1
    // results[1] is from promise2
    // results[2] is from promise3
})
.catch(error => {
    console.error("Error in one of the promises: ", error);
});