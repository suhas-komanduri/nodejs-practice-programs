const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter the first number: `, (num1) => {
    readline.question(`Enter the second number: `, (num2) => {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
        const difference = Math.abs(parseFloat(num1) - parseFloat(num2));
        console.log(`The difference between ${num1} and ${num2} is: ${difference}`);
        readline.close();
    })
});