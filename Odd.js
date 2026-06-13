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
        console.log(`The series of odd numbers up to ${n} is: `);
        // Loop to print the series from 1 to n
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
        console.log(); // Print a newline after the series
    }

    // Close the readline interface
    rl.close();
});