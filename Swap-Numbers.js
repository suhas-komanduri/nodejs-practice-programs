const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Enter the first number: `, num1 =>{
    readline.question(`Enter the second number: `, num2 =>{
        // Convert the string inputs to floating point numbers
        let N1 = parseFloat(num1);
        let N2 = parseFloat(num2);

        // Display the numbersin the order they were entered
        console.log(`You entered: ${N1} and ${N2}`);

        //Swap the numbers
        const Temp = N1;
        N1 = N2;
        N2 = Temp;
        
        // Display the swapped numbers
        console.log(`After swapping: ${N1} and ${N2}`);

        // Close the readline interface
        readline.close();
});
});