const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter a positive integer: `, (input) => {
    let N = parseInt(input);

    if (isNaN(N) || N <=0) {
        console.log(`Entered value is NOT a positive integer.`);
    } else {
        console.log(`The factors of ${N}:`);
        for (let i = 1; i <= N; i++) {
            if (N % i === 0) {
                console.log(i);
            }
        }
    }
    readline.close();
});