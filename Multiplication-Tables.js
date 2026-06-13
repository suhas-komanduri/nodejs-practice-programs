const readline = require('readline');

// Create an interface to read data from the standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter a positive integer (N): ', (input) => {
    const N = parseInt(input, 10);

    // Validate if the input is a valid positive integer
    if (isNaN(N) || N <= 0) {
        console.log('Error: Please enter a valid positive integer.');
    } else {
        console.log(`\n=== Multiplication Tables from 1 to ${N} ===\n`);
        
        // Loop through each multiplier from 1 to N
        for (let i = 1; i <= N; i++) {
            console.log(`--- Table of ${i} ---`);
            
            // Generate table entries from 1 to 10
            for (let j = 1; j <= 10; j++) {
                console.log(`${i} x ${j} = ${i * j}`);
            }
            console.log(''); // Add a blank line between tables for better formatting
        }
    }

    // Close the interface
    rl.close();
});