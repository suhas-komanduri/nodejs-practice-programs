const readline = require('readline');

// Set up the interface to read input from the terminal console
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
        // Option 1: Reverse using string manipulation
        const reversedStr = N.toString().split('').reverse().join('');
        const reversedNum = parseInt(reversedStr, 10);

        console.log(`Reversed number: ${reversedNum}`);
        
        // Note: If you want to keep trailing zeros as digits (e.g., "500" -> "005"), 
        // simply print the 'reversedStr' variable directly instead of parsing it back to an integer.
    }

    // Close the input stream
    rl.close();
});