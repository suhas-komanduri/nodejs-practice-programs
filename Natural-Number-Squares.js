const readline = require('node:readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number
rl.question(`Enter a number: `, (input) => {
    // Convert the input string in to a number
    const n = parseInt(input);

    // Validate if the input is a valid natural number
    if (isNaN(n) || n<1) {
        console.log(`${n} is not a valid natural number.`);
    } else {
        console.log(`The squares of the first ${n} natural numbers are: `);
        for (let i = 1; i <= n; i++) {
            console.log(i * i);
        }
        console.log(); // Print a newline after the series
        console.log(`The squares of the first ${n} natural numbers in reverse order are: `);
        for (let i = n; i >=1; i--) {
            console.log(i * i);
        }
        console.log(); // Print a newline after the series
    }

    // Close the readline interface
    rl.close();
});