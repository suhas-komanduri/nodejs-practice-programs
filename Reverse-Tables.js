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
        for (let i = 10; i >= 1; i--) {
            console.log(`${N} x ${i} = ${N * i}`);
        }
    }
    readline.close();
});