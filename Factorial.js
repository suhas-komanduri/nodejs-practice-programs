const readline = require('node:readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number
rl.question(`Enter a number: `, (input) => {
    // Convert the input string in to a number
    const N = parseInt(input);

    // Validate if the input is a valid natural number
    if (isNaN(N) || N < 0) {
        console.log(`Factorial for negative numbers is not defined.`);
    } else {
        let factorial = 1;
        for (let i = 1; i <= N; i++) {
            factorial *= i;
        }
        console.log(`The factorial of ${N} is: ${factorial}`);
    }

    // Close the readline interface
    rl.close();
});