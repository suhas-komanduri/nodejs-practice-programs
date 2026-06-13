const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

rl.question('Enter the value of N: ', (answer) => {
    const n = parseInt(answer);
    const primes = [];
    let currentNum = 2;

    while (primes.length < n) {
        if (isPrime(currentNum)) {
            primes.push(currentNum);
        }
        currentNum++;
    }

    console.log(`The first ${n} prime numbers are:`);
    console.log(primes.join(', '));
    
    rl.close();
});