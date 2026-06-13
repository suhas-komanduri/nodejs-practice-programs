const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer (N): ', (input) => {
    const N = parseInt(input, 10);

    if (isNaN(N) || N <= 0) {
        console.log('Please enter a valid positive integer.');
        rl.close();
        return;
    }

    console.log(`\nMultiplication Grid (1 to ${N}):\n`);

    // Determine padding based on the largest number in the grid
    const maxValWidth = (N * N).toString().length;

    for (let i = 1; i <= 10; i++) {
        let row = '';
        for (let j = 1; j <= N; j++) {
            const result = i * j;
            // Pad numbers so the columns align perfectly
            row += result.toString().padStart(maxValWidth + 2, ' ');
        }
        console.log(row);
    }

    rl.close();
});