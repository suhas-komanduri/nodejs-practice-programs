console.log("Hello from Node.JS!!!");

// Variables and Functions
// Variables (let, const, var)
let name = "Node.js";
const version = 20;

// Function declaration
function greet(user) {
    return `Hello, ${user}`; // Template literal (ES6)
}

// Arrow function (ES6+)
const add = (a, b) => a + b;

console.log(greet('Developer')); // Output: Hello, Developer
console.log(add(5, 3)); // Output: 8

// Objects and Arrays
// Object
const user = {
    name: 'Suhas Komanduri',
    age: 39,
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

// Array
const colors = ['Viloet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'];

// Array methods (ES6+)
colors.forEach(color => console.log(color));
const lengths = colors.map(color => color.length);