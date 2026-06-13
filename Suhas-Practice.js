const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter the first number: `, num1 =>{
    readline.question(`Enter the second number: `, num2 =>{
        // Convert the string inputs to floating point numbers
        const N1 = parseFloat(num1);
        const N2 = parseFloat(num2);

        function subtract (a, b) {
            if (a > b) {
                return a - b;
            } else if (a === b) {
                return 0;
            } else console.log(`Cannot subtract ${b} from ${a} as ${b} is greater then ${a}`);
        }

        // Calculate the results
        const Sum = N1 + N2;
        const Product = N1 * N2;
        const Diff = subtract(N1, N2);

        // Display the results
        console.log(`Sum of ${N1} and ${N2} is: ${Sum}`);
        console.log(`Product of ${N1} and ${N2} is: ${Product}`);
        console.log(`Difference between ${N1} and ${N2} is: ${Diff}`);

        // Close the readline interface
        readline.close();
});
});