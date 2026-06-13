var aFruits = ['Apple', 'Banana', 'Cherry'];
console.log(aFruits); // Output: ['Apple', 'Banana', 'Cherry']

// Accessing elements
console.log(aFruits[0]); // Output: 'Apple'
// Length of the array
console.log(aFruits.length); // Output: 3
// Print last item
console.log(aFruits[aFruits.length -1]); // Output: 'Cherry'

// Adding an element
aFruits.push('Mango');
console.log(aFruits); // Output: ['Apple', 'Banana', 'Cherry', 'Mango']
// Removing the last element
aFruits.pop();
console.log(aFruits); // Output: ['Apple', 'Banana', 'Cherry']
// Removing the item from middle
aFruits.splice (1, 1); // Removes 'Banana'
console.log(aFruits); // Output: ['Apple', 'Cherry']
// Adding an item at index 1
aFruits.splice(1, 0, 'Blueberry'); // Adds 'Blueberry' at index 1
console.log(aFruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// Iterating over the array - like you do in ABAP - LOOP AT ITAB INTO wa.
for (var i = 0; i < aFruits.length; i++) {
    console.log(aFruits[i]);
}

// Another way of iterating using for..of - wa
for (var fruit of aFruits) {
    console.log(fruit);
}

// String Operations
var sName = "Abhishek Bachchan";

// Split string in to array - SPLIT str INTO itab SEPARATED BY space
var aNameParts = sName.split(" ");
console.log(aNameParts); // Output: ['Abhishek', 'Bachchan']

// Join array into string - CONCATENATE itab INTO str SEPARARED BY space
var sJoinedName = aNameParts.join(" ");
console.log(sJoinedName); // Output: 'Abhishek Bachchan'

// Reverse array
aNameParts.reverse();
console.log(aNameParts); // Output: ['Bachchan', 'Abhishek']

// Sort array
aNameParts.sort();
console.log(aNameParts); // Output: ['Abhishek', 'Bachchan']

// Convert a string to upper case
var sUpper = sName.toUpperCase();
console.log(sUpper); // Output: 'ABHISHEK BACHCHAN'

// Convert a string to lower case
var sLower = sName.toLowerCase();
console.log(sLower); // Output: 'abhishek bachchan'

// Search a string in another string
var nIndex = sName.indexOf("Bachchan");
console.log(nIndex); // Output: 9
var nIndex = sName.indexOf("Singahnia");
if (nIndex === -1) {
    console.log("Singhania was not found in the name")
}