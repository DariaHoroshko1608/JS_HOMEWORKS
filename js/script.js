'use strict'

// Частина 1

const lastName =prompt( 'Last name');
const firstName = prompt('First name');
const age = prompt( 'Age');
const userFull = lastName + ' ' + firstName + ' ' + age;

alert(userFull);
console.log(userFull);

// Частина 2

const number = 12345;

const five = number % 10;
const four = Math.floor(number / 10) % 10;
const three = Math.floor(number / 100) % 10;
const two = Math.floor(number / 1000) % 10;
const one = Math.floor(number / 10000) % 10;

console.log(one, two, three, four, five);

