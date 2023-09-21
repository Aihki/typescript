"use strict";
// Test the function with arrays of different types
const reverseArray = (arr) => {
    return arr.reverse();
};
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry", "date"];
const mixedArray = [true, 42, "hello", false];
const reversedNumberArray = reverseArray(numberArray);
const reversedStringArray = reverseArray(stringArray);
const reversedMixedArray = reverseArray(mixedArray);
console.log("Reversed Number Array:", reversedNumberArray);
console.log("Reversed String Array:", reversedStringArray);
console.log("Reversed Mixed Array:", reversedMixedArray);
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
