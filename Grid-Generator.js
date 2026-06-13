const readline = require('readline');

// Setup the interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a perfect square (e.g., 4, 9, 16, 25): ', (answer) => {
  const n = parseInt(answer);
  const root = Math.sqrt(n);

  // Validate if the number is a perfect square
  if (isNaN(n) || n <= 0 || !Number.isInteger(root)) {
    console.log('Error: Please enter a valid positive perfect square.');
    rl.close();
    return;
  }

  console.log(`\nGenerating a ${root}x${root} grid:\n`);

  let currentNumber = 1;
  // Determine padding based on the largest number for a clean layout
  const padding = n.toString().length + 2;

  for (let i = 0; i < root; i++) {
    let row = '';
    for (let j = 0; j < root; j++) {
      // Append number with dynamic padding
      row += currentNumber.toString().padEnd(padding, ' ');
      currentNumber++;
    }
    console.log(row);
  }

  rl.close();
});