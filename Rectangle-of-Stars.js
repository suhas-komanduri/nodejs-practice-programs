const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for rows
rl.question('Enter the number of rows (R): ', (rInput) => {
    // Prompt for columns
    rl.question('Enter the number of columns (C): ', (cInput) => {
        const R = parseInt(rInput);
        const C = parseInt(cInput);

        // Validation check
        if (isNaN(R) || isNaN(C) || R <= 0 || C <= 0) {
            console.log('Please enter valid positive integers.');
        } else {
            // Generate and print the rectangle
            for (let i = 0; i < R; i++) {
                console.log('*'.repeat(C));
            }
        }
        rl.close();
    });
});