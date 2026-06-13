const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter any 4 digits:`, (input) =>{
    //1. Convert input string in to array of digits
    const digits = input.replace(/\D/g, '').split('');

    if (digits.length !== 4) {
        console.log(`Please enter exactly 4 digits.`);
        rl.close();
        return;
    }

    //2. Form the largest number (sort descending)
    const largestNum = parseInt(digits.slice().sort((a, b) => b - a).join(''));

    //3. Form the smallest number (sort ascending)
    const smallestNum = parseInt(digits.slice().sort((a, b) => a - b).join(''));

    //4. Calculate and display the difference
    const difference = largestNum - smallestNum;

    console.log(`The largest number is ${largestNum}`);
    console.log(`The smallest number is ${smallestNum}`);
    console.log(`The difference between ${largestNum} and ${smallestNum} is ${difference}`);

    rl.close();
});