const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer (N): ', (input) => {
    const N = parseInt(input, 10);

    if (isNaN(N) || N <= 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        console.log(`Pairs that add up to ${N}:`);
        let found = false;

        // Loop up to N/2 to avoid printing duplicate pairs like (A, B) and (B, A)
        for (let i = 1; i <= N / 2; i++) {
            let j = N - i;
            console.log(`${i} + ${j} = ${N}`);
            found = true;
        }

        if (!found) {
            console.log('No pairs found.');
        }
    }

    rl.close();
});