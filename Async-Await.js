// Basic Async-Await
async function getData() {
    console.log('Starting...');
    const result = await someAsyncOperation();
    console.log(`Result: ${result}`);
    return result;
}

function someAsyncOperation () {
    return new Promise(resolve => {
        setTimeout(() => resolve('Operation completed'), 1000);
    });
}

// Call the async function
getData().then(data => console.log('Final data: ', data));

// Reading a File with Async-Await
const fs = require('fs').promises;
async function readFile() {
    try {
        const data = await fs.readFile('myFile.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log('Error reading file: ', error);
    }
}
readFile();