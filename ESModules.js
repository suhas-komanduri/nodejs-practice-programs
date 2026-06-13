// Combined file for demonstration purpose
// In a real application this would be separate files

// This would be in math.js
export function add (a,b) {
    return a + b;
}

export function subtract (a, b) {
    return a - b;
}

// This would be in app.mjs
//import { add, subtract } from './math.js';
console.log(add(19, 87)); // Output: 106
console.log(subtract(87, 19)); // Output: 68