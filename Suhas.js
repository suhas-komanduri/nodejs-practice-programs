export function add (a,b) {
    return a + b;
}

export function subtract (a, b) {
    if(a>b) {
        return a - b;
} else if(a === b) {
    return 0;
} else console.log(`Cannot subtract ${b} from ${a} as ${b} is greater than ${a}`);
}

console.log(add(19, 87)); // Output: 106
console.log(subtract(87, 19)); // Output: 68
console.log(subtract(87,87)); // Output: 0
console.log(subtract(19, 87)); // Output: Cannot subtract 87 from 19 as 87 is greater than 19