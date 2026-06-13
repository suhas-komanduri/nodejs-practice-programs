const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the base (B): ', (baseInput) => {
    rl.question('Enter the exponent (E): ', (exponentInput) => {
        const B = Number(baseInput);
        const E = Number(exponentInput);

        if (isNaN(B) || !baseInput.trim() || isNaN(E) || !exponentInput.trim()) {
            console.log('Error: Please enter valid numbers.');
        } else {
            let result = 1;
            for (let i = 1; i <= E; i++) {
                result *= B;
            }
            console.log(`${B} raised to the power of ${E} is: ${result}`);
        }
        rl.close();
    });
});