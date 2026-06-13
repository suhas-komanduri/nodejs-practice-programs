const readline = require('readline');

// Create an interface to read data from the standard input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Conversion functions
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

function main() {
    console.log("--- Temperature Converter ---");
    console.log("1. Convert Celsius to Fahrenheit");
    console.log("2. Convert Fahrenheit to Celsius");
    
    rl.question("Choose an option (1 or 2): ", (choice) => {
        if (choice !== '1' && choice !== '2') {
            console.log("Invalid option! Please restart the program and pick 1 or 2.");
            rl.close();
            return;
        }

        rl.question("Enter the temperature value: ", (inputVal) => {
            const temp = parseFloat(inputVal);

            // Validate that the input is a valid number
            if (isNaN(temp)) {
                console.log("Error: Please enter a valid numerical value.");
                rl.close();
                return;
            }

            if (choice === '1') {
                const result = celsiusToFahrenheit(temp);
                console.log(`${temp}°C is equal to ${result.toFixed(2)}°F`);
            } else if (choice === '2') {
                const result = fahrenheitToCelsius(temp);
                console.log(`${temp}°F is equal to ${result.toFixed(2)}°C`);
            }

            // Close the interface
            rl.close();
        });
    });
}

// Run the script
main();