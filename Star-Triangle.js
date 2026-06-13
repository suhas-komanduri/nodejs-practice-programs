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
        console.log(`${n} is not a valid number.`);
    } else {
        console.log(`The star triangle with ${n} rows is: `);
        // Loop to print the star triangle
        for (let i = 1; i <= n; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += '* ';
            }
            console.log(row);
        }
    }

    // Close the readline interface
    rl.close();
});