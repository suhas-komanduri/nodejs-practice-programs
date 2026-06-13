const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer N (the size of the middle row): ', (input) => {
    const N = parseInt(input);

    if (isNaN(N) || N <= 0) {
        console.log('Please enter a valid positive integer.');
        rl.close();
        return;
    }

    // 1. Top half of the diamond (including the middle row)
    for (let i = 1; i <= N; i++) {
        let spaces = ' '.repeat(N - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    // 2. Bottom half of the diamond
    for (let i = N - 1; i >= 1; i--) {
        let spaces = ' '.repeat(N - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    rl.close();
});