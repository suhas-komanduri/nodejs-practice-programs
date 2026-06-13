const readline = require('node:readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number
rl.question(`Enter a VALID positive integer: `, (input) => {
    // Convert the input string in to a number
    const N = parseInt(input);

    // Validate if the input is a valid natural number
    if (isNaN(N) || N < 0) {
        console.log(`Entered number is NOT a VALID positive integer`);
    } else {
        let Sum = 0;
        for (let i = 1; i <= N; i++) {
            Sum += (i * i);
        }
        console.log(`The sum of squares of natural numbers up to ${N} is: ${Sum}`);
    }

    // Close the readline interface
    rl.close();
});