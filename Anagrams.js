const readline = require('readline');

// Set up interface to accept terminal input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Normalizes a string and checks if it is an anagram of another
 * @param {string} str1 
 * @param {string} str2 
 * @return {boolean}
 */
function isAnagram(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const clean1 = cleanStr(str1);
    const clean2 = cleanStr(str2);

    // If lengths match, sort characters and compare them
    if (clean1.length !== clean2.length) {
        return false;
    }

    const sorted1 = clean1.split('').sort().join('');
    const sorted2 = clean2.split('').sort().join('');

    return sorted1 === sorted2;
}

// Ask for user inputs sequentially
rl.question('Enter the first string: ', (string1) => {
    rl.question('Enter the second string: ', (string2) => {
        
        // Display the final result
        if (isAnagram(string1, string2)) {
            console.log(`"${string1}" and "${string2}" are anagrams!`);
        } else {
            console.log(`"${string1}" and "${string2}" are NOT anagrams.`);
        }
        
        rl.close();
    });
});