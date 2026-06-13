const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a positive integer: `, (input) => {
    let N = parseInt(input);

    if (isNaN(N) || N <=0) {
        console.log(`Entered value is NOT a positive integer.`);
    } else {
        console.log(`Multiplication Table for ${N}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${N} x ${i} = ${N * i}`);
        }
        console.log();
        console.log(`Reverse multiplication table for ${N}: `);
        for (let j = 10; j >= 1; j--) {
            console.log(`${N} x ${j} = ${N * j}`);
        }
    }
    readline.close();
});