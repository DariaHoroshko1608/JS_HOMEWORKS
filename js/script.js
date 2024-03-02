'use strict'

const numOne = parseFloat(prompt('Запишіть число'));
const numTwo = parseFloat(prompt('Запишіть число'));

const addResult = numOne + numTwo;
console.log(`Результат: ${numOne} + ${numTwo} = ${addResult}`);

const subResult = numOne - numTwo;
console.log(`Результат: ${numOne} - ${numTwo} = ${subResult}`);

const multResult = numOne * numTwo;
console.log(`Результат: ${numOne} * ${numTwo} = ${multResult}`);


if (numTwo !== 0) {
    const divResult = numOne / numTwo;
    console.log(`Результат: ${numOne} / ${numTwo} = ${divResult}`);
} else {
    console.log("Ділення на нуль неможливе!");
}


