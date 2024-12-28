'use strict';

import emojipedia from './emojipedia.js';
//console.log(emojipedia);
let numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
console.log(numbers.map(n => n * 2));

//Filter - Create a new array by keeping the items that return true.
console.log(numbers.filter(n => n % 2 === 0));

//Reduce - Accumulate a value by doing something to each item in an array.
console.log(numbers.reduce((acc, num) => acc + num, 0));

//Find - find the first item that matches from an array.
console.log(numbers.find(n => n % 2 === 0));

//FindIndex - find the index of the first item that matches.
console.log(numbers.findIndex(n => n % 2 === 0));
console.log(emojipedia.map(emoji => emoji.meaning));
console.log(emojipedia.map(emoji => emoji.meaning.substring(0, 100)));
