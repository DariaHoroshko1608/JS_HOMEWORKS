'use strict'

const numOne = parseFloat(prompt('Введіть перше число'));
const numTwo = parseFloat(prompt('Введіть друге число'));

const add = numOne + numTwo;
const mult = numOne * numTwo;
const div = numOne / numTwo;
const sub = numOne - numTwo;

alert (numOne + " + " + numTwo + " = " + add + "\n" +
    numOne + " - " + numTwo + " = " + sub + "\n" +
    numOne + " * " + numTwo + " = " + mult + "\n" +
    numOne + " / " + numTwo + " = " + div);