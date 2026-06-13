const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function startCountdown() {
  readline.question('Enter a positive integer: ', (input) => {
    const N = parseInt(input, 10);

    if (isNaN(N) || N <= 0) {
      console.log('Please enter a valid positive integer.');
      startCountdown(); 
      return;
    }

    for (let i = N; i >= 1; i--) {
      console.log(i);
    }
    
    console.log('GO');
    readline.close();
  });
}

startCountdown();