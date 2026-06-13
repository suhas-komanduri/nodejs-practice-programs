const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter the first number: `, num1 =>{
    readline.question(`Enter the second number: `, num2 =>{
        // Convert the string inputs to floating point numbers
        const N1 = parseFloat(num1);
        const N2 = parseFloat(num2);

       // Calculate the results
        const Sum = N1 + N2;
        const Product = N1 * N2;
        const Diff = N1 - N2;

        // Display the results
        console.log(`Sum of ${N1} and ${N2} is: ${Sum}`);
        console.log(`Product of ${N1} and ${N2} is: ${Product}`);
        if (N1 >= N2) {
            console.log(`Difference between ${N1} and ${N2} is: ${Diff}`);
        } else {
            console.log(`Cannot subtract ${N2} from ${N1} as ${N2} is greater than ${N1}`);
        }
        // Close the readline interface
        readline.close();
});
});