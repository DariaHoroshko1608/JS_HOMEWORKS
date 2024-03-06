'use strict'

const operation = prompt("Що ви хочете зробити? (add, sub, mult, div)").toLowerCase();

const numOne = parseFloat(prompt("Введіть перше число:"));
const numTwo = parseFloat(prompt("Введіть друге число:"));

let result = null;
if (operation === 'add') {
    result = numOne + numTwo;
} else if (operation === 'sub') {
    result = numOne - numTwo;
} else if (operation === 'mult') {
    result = numOne * numTwo;
} else if (operation === 'div') {
    if (numTwo !== 0) {
        result = numOne / numTwo;
    } else {
        alert("Ділення на нуль!");
        throw new Error("Ділення на нуль!");
    }
}

alert(numOne + " " + operation + " " + numTwo + " = " + result);
