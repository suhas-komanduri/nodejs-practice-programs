import readline from 'node:readline/promises';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function main() {
    const answer = await rl.question(`Enter the number of terms required: `);
    const n = parseInt(answer);

    if (isNaN(n) || n <=0) {
        console.log(`Please enter a valid positive integer.`);
    } else {
        let a = 0, b = 1;
        console.log(`Fibonacci Sequeence upto ${n} terms:`);
        for (let i = 1; i <=n; i++) {
            process.stdout.write(a + " ");
            let c = a + b;
            a = b;
            b = c;
        }
        console.log(); // New Line
    }
    rl.close();
}

main();