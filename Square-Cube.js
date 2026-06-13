const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number (N): ', (answer) => {
  const n = parseInt(answer);

  if (isNaN(n)) {
    console.log("Please enter a valid number.");
  } else {
    // Check for perfect square
    const sqrt = Math.sqrt(n);
    const isSquare = n >= 0 && Number.isInteger(sqrt);

    // Check for perfect cube
    const cbrt = Math.cbrt(n);
    const isCube = Number.isInteger(Math.round(cbrt) ** 3 === n ? Math.round(cbrt) : cbrt); 
    // Note: Math.cbrt can have precision issues; checking round(cbrt)^3 is safer
    const isCubeSafe = Math.pow(Math.round(cbrt), 3) === n;

    if (isSquare && isCubeSafe) {
      console.log(`${n} is both a perfect square and a perfect cube.`);
    } else if (isSquare) {
      console.log(`${n} is a perfect square, but not a perfect cube.`);
    } else if (isCubeSafe) {
      console.log(`${n} is a perfect cube, but not a perfect square.`);
    } else {
      console.log(`${n} is neither a perfect square nor a perfect cube.`);
    }
  }

  rl.close();
});