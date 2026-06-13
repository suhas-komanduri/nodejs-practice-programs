const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter two positive integers separated by a space: ', (input) => {
  const [a, b] = input.split(' ').map(Number);

  if (!a || !b || a <= 0 || b <= 0) {
    console.log("Please enter two valid positive integers.");
  } else {
    const hcf = calculateHCF(a, b);
    const lcm = (a * b) / hcf;

    console.log(`HCF: ${hcf}`);
    console.log(`LCM: ${lcm}`);
  }
  readline.close();
});

// Using the Euclidean Algorithm to find HCF
function calculateHCF(a, b) {
  while (b) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
}