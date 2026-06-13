const readline = require('readline');

// Set up interface for terminal input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer (N): ', (input) => {
    const N = parseInt(input, 10);

    // Validate if the input is a valid positive integer
    if (isNaN(N) || N <= 0) {
        console.log('Error: Please enter a valid positive integer greater than 0.');
    } else {
        let sum = 0;
        let terms = [];

        // Calculate sum and collect the terms for display
        for (let i = 1; i <= N; i++) {
            sum += i;
            terms.push(i);
        }

        // Join the terms array with ' + ' to construct your format
        const outputString = terms.join(' + ') + ' = ' + N + ' x ' + (N + 1) + ' / 2 = ' + sum;
        console.log(outputString);
    }

    rl.close();
});