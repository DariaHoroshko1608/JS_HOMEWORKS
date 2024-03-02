'use strict'

const operation = prompt('Що ви хочете зробити?((add, sub, mult, div))');
const numOne = parseFloat(prompt('Введіть перше число'));
const numTwo = parseFloat(prompt('Введіть друге число'));
let result = null;


switch (operation){
    case 'add':
        result = numOne + numTwo;
        alert(`${numOne} + ${numTwo} = ${result}`);
        break;
    case  'sub':
        result = numOne - numTwo;
        alert(`${numOne} - ${numTwo} = ${result}`);
        break;
    case 'mult':
        result = numOne * numTwo;
        alert(`${numOne} * ${numTwo} = ${result}`);
        break;
    case 'div':
        if (numTwo !==0){
            result = numOne / numTwo;
            alert(`${numOne} / ${numTwo} = ${result}`);
        }
        else {
            alert(`Ділення на 0 неможливе`);
        }
        break;
    default:
        alert('Некоректне введення');
}
