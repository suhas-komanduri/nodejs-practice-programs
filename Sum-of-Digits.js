const readline = require('readline');

// Create an interface to read data from the terminal standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter a positive integer (N): ', (input) => {
    // Convert input string into a base-10 integer
    let n = parseInt(input, 10);

    // Validate if the input is a positive integer
    if (isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive integer.");
    } else {
        let originalNumber = n;
        let sum = 0;

        // Loop to extract and sum each digit
        while (n > 0) {
            let lastDigit = n % 10;   // Get the last digit
            sum += lastDigit;         // Add the digit to the running sum
            n = Math.floor(n / 10);   // Remove the last digit from N
        }

        // Display the final result
        console.log(`The sum of the digits of ${originalNumber} is: ${sum}`);
    }

    // Close the input interface
    rl.close();
});