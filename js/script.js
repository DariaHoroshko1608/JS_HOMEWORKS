'use strict'

// Частина 1

let lastName =prompt( 'Last name');
let firstName = prompt('First name');
let age = prompt( 'Age');
let userFull = lastName + ' ' + firstName + ' ' + age;

alert(userFull);
console.log(userFull);

// Частина 2

let number = 12345;

let five = number % 10;
let four = Math.floor(number / 10) % 10;
let three = Math.floor(number / 100) % 10;
let two = Math.floor(number / 1000) % 10;
let one = Math.floor(number / 10000) % 10;

console.log(one, two, three, four, five);

