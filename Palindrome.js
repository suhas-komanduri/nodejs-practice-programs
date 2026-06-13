const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter a string to check if it is a palindrome: `, (input) => {
    //Normalise the input: Remove the non-alphanumeric characters and convert to lower case
    const normalisedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    //Reverse the string
    const reversedInput = normalisedInput.split('').reverse().join('');

    // Check if palindrome
    if (normalisedInput === reversedInput) {
        console.log(`${input} is a palindrome.`);
    } else {
        console.log(`${input} is not a palindrome.`);
    }
    rl.close();
});