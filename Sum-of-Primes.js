const readline = require('readline');

// Create an interface to accept terminal inputs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to check if a single number is prime
function isPrime(num) {
    if (num <= 1) return false; // 1 is not a prime number
    if (num === 2) return true; // 2 is the only even prime number
    if (num % 2 === 0) return false; // Exclude other even numbers

    // Check odd divisors up to the square root of the number
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Main function to calculate and print primes
function calculatePrimes(n) {
    let primes = [];
    let sum = 0;

    // Loop through numbers from 1 to N
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
            sum += i;
        }
    }

    // Output the results
    console.log(`\nPrime numbers between 1 and ${n}:`);
    if (primes.length > 0) {
        console.log(primes.join(', '));
    } else {
        console.log('None found.');
    }
    console.log(`\nSum of these prime numbers: ${sum}`);
}

// Prompt the user for input
rl.question('Enter a positive integer N: ', (input) => {
    const N = parseInt(input.trim(), 10);

    // Validate the input to ensure it is a positive integer
    if (isNaN(N) || N <= 0) {
        console.log('Error: Please enter a valid positive integer.');
    } else {
        calculatePrimes(N);
    }

    // Close the interface stream
    rl.close();
});