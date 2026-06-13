const readline = require('readline');

// Create an interface for reading input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer N: ', (input) => {
    const n = parseInt(input, 10);

    // Validate if the input is a valid positive integer
    if (isNaN(n) || n <= 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        // Generate the pyramid pattern
        for (let i = 1; i <= n; i++) {
            // 1. Generate leading spaces for alignment
            let spaces = ' '.repeat(n - i);
            
            // 2. Generate the repeating numbers for the current row
            let numbers = (i + ' ').repeat(i).trim();
            
            // 3. Print the combined row
            console.log(spaces + numbers);
        }
    }
    rl.close();
});