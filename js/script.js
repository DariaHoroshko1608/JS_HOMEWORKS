'use strict'

const a = 20;
const b = 2;

//1
switch (true){
    case a === 0 :
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//2
switch (true){
    case a > 0 :
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//3
switch (true){
    case a < 0 :
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//4

switch (true) {
    case a >= 0:
        console.log('Вірно');
        break;
    default:
        console.log('Неправильно');
}

//5

switch (true) {
    case a <= 0:
        console.log('Вірно');
        break;
    default:
        console.log('Неправильно');
}

//6

switch (true) {
    case a !== 0:
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//7

switch (true) {
    case a === 'test':
        console.log('Вірно');
        break;
    default:
        console.log('Неправильно');
}

//8

switch (true) {
    case a === 1:
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//9

switch (true) {
    case a > 0 && a < 5:
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//10

let resultOne = null;

switch (true) {
    case (a <= 1 && b >= 3):
        resultOne = a + b;
        break;
    default:
        resultOne = a - b;
        break;
}

console.log(resultOne);


//11

switch (true) {
    case a <= 1 && b >= 3:
        console.log(a + b);
        break;
    default:
        console.log(a - b);
}

//12

switch (true) {
    case (a > 2 && a < 11) || (b >= 6 && b < 14):
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

//13

const num = 1;
let result = null;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'літо';
        break;
    case 4:
        result = 'осінь';
        break;
    default:
        result = 'Невірне значення';
}

console.log(result);