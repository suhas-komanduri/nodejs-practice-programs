const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a number: `, (N) => {
    const num = parseInt(N);
    if (isNaN(num)) {
        console.log(`${N} is not a valid number.`);
    } else {
        console.log(num % 2 === 0 ? `${N} is an even number.` : `${N} is an odd number.`);
    }
    readline.close();
});