"use strict";
const lengthOrSquare = (value) => {
    if (typeof value === 'string') {
        console.log('Input is a string');
        return value.length;
    }
    else if (typeof value === 'number') {
        console.log('Input is a number');
        return value * value;
    }
    else {
        return 'Invalid input';
    }
};
const userInput = prompt('Enter a value as either a string or a number:');
const parsedValue = isNaN(Number(userInput)) ? userInput : parseFloat(String(userInput));
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
