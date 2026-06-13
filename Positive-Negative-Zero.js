const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a number: `, (N) => {
    const num = parseInt(N);
    if (isNaN(num)) {
        console.log(`${N} is not a valid number.`);
    } else if (N > 0) {
        console.log(`${N} is a positive number`);
    } else if (N < 0) {
        console.log(`${N} is a negative number`);
    } else if (N === 0) {
        console.log(`${N} is ZERO.`);
    }
    readline.close();
});