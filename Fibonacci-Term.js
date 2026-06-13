const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calculates the nth Fibonacci number iteratively
 * @param {number} n - The position in the sequence
 * @returns {bigint} - The nth Fibonacci number
 */
function getFibonacci(n) {
  if (n < 0) return "Please enter a positive integer.";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0; // F(n-2)
  let b = 1; // F(n-1)
  
  for (let i = 2; i <= n; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
}

// Prompt user for input
rl.question('Enter a positive integer "n": ', (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log('Invalid input. Please enter a positive integer.');
  } else {
    const result = getFibonacci(n);
    console.log(`The number at the position ${n} in the Fibonacci series is: ${result}`);
  }

  rl.close();
});