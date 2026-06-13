const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a positive integer N: ', (answer) => {
    const n = parseInt(answer);

    if (isNaN(n) || n < 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        const row = getPascalRow(n);
        console.log(`Row ${n} of the pascal triangle is:`, row.join(' '));
    }
    rl.close();
});

function getPascalRow(n) {
    const row = [1];
    let currentTerm = 1;

    for (let i = 1; i <= n; i++) {
        // Uses the binomial coefficient identity: C(n, i) = C(n, i-1) * (n - i + 1) / i
        // BigInt prevents integer overflow for large values of N
        currentTerm = (BigInt(currentTerm) * BigInt(n - i + 1)) / BigInt(i);
        row.push(currentTerm.toString());
    }

    return row;
}