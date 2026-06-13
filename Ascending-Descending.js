const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbers = [];

console.log("Please enter 5 numbers:");

const askQuestion = (index) => {
  if (index < 5) {
    rl.question(`Enter number ${index + 1}: `, (input) => {
      const num = parseFloat(input);
      if (isNaN(num)) {
        console.log("That's not a valid number. Try again.");
        askQuestion(index);
      } else {
        numbers.push(num);
        askQuestion(index + 1);
      }
    });
  } else {
    rl.close();
    displayResults();
  }
};

const displayResults = () => {
  // Use toSorted() or spread syntax to avoid mutating the original array
  // Use a comparison function (a, b) => a - b for numeric sorting
  const ascending = [...numbers].sort((a, b) => a - b);
  const descending = [...numbers].sort((a, b) => b - a);

  console.log("\n--- Results ---");
  console.log("Original Numbers:", numbers);
  console.log("Ascending Order:", ascending);
  console.log("Descending Order:", descending);
};

askQuestion(0);