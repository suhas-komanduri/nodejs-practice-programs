// Combined file for demo purpose
// In real application, this would be separate files

export function sayHello() {
    console.log(`Hello from Node.js!`);
}

export function sayGoodBye() {
    console.log(`Goodbye! Have a nice day!`);
}

export function add (a,b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
    return;
}

export function subtract (a, b) {
    if(a>b) {
        console.log(`The difference between ${a} and ${b} is ${a - b}`);
        return;
} else if(a === b) {
    console.log(`The difference between ${a} and ${b} is 0`);
    return;
} else console.log(`Cannot subtract ${b} from ${a} as ${b} is greater than ${a}`);
    return;
}

sayHello(); // Output: Hello from Node.js!
console.log(add(19, 87)); // Output: The sum of 19 and 87 is 106
console.log(subtract(87, 19)); // Output: The difference between 87 and 19 is 68
console.log(subtract(87,87)); // Output: The difference between 87 and 87 is 0
console.log(subtract(19, 87)); // Output: Cannot subtract 87 from 19 as 87 is greater than 19
sayGoodBye(); // Output: Goodbye! Have a nice day!