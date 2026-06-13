const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a positive integer: `, (input) => {
    let N = parseInt(input);

    if (isNaN(N) || N <=0) {
        console.log(`Entered value is NOT a positive integer.`);
    } else {
        console.log(`Collatz Conjecture sequence starting from ${N}:`);
        while (N !== 1) {
            process.stdout.write(`${N} `);
            if (N % 2 === 0) {
                N = N / 2;
            } else {
                N = (3 * N) + 1;
            }
        }
        console.log(`1`);
    }
    readline.close();
});