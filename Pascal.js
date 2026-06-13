const readline = require('readline');

// Set up interface for terminal input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Generates and prints Pascal's Triangle up to N rows
 * @param {number} n - The number of rows to generate
 */
function displayPascalTriangle(n) {
    let triangle = [];

    for (let i = 0; i < n; i++) {
        triangle[i] = new Array(i + 1);
        
        for (let j = 0; j <= i; j++) {
            // First and last elements of each row are always 1
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                // Other elements are the sum of the two elements directly above
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

    // Determine the width of the final row for formatting gaps
    const maxRowStringWidth = triangle[n - 1].join(' ').length;

    // Center-align and print each row
    for (let i = 0; i < n; i++) {
        const rowString = triangle[i].join(' ');
        const paddingAmount = Math.floor((maxRowStringWidth - rowString.length) / 2);
        const padding = ' '.repeat(paddingAmount);
        console.log(padding + rowString);
    }
}

// Prompt the user for input
rl.question('Enter a positive integer N: ', (input) => {
    const N = parseInt(input.trim(), 10);

    // Validate that input is a valid positive integer
    if (isNaN(N) || N <= 0) {
        console.log('Error: Please enter a valid positive integer greater than 0.');
    } else {
        console.log(`\nPascal's Triangle up to ${N} rows:\n`);
        displayPascalTriangle(N);
    }

    rl.close();
});