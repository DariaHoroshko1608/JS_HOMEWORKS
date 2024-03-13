'use strict'

const a = 9;
const b = 3;

// 1
console.log(a === 0 ? 'Вірно' : 'Неправильно');

// 2
console.log(a > 0 ? 'Вірно' : 'Невірно');

// 3
console.log(a < 0 ? 'Вірно' : 'Невірно');

// 4
console.log(a >= 0 ? 'Вірно' : 'Неправильно');

// 5
console.log(a <= 0 ? 'Вірно' : 'Неправильно');

// 6
console.log(a !== 0 ? 'Вірно' : 'Невірно');

// 7
console.log(a === 'test' ? 'Вірно' : 'Неправильно');

// 8
console.log(a === 1 ? 'Вірно' : 'Невірно');

// 9
console.log(a > 0 && a < 5 ? 'Вірно' : 'Невірно');

// 10

const resultOne = (a === 0 || a === 2) ? a + 7 : a / 10;
console.log('Нове значення змінної a: ' + resultOne);

// 11
console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Вірно' : 'Невірно');

// 12
console.log((a > 2 && a < 11) || (b >= 6 && b < 14) ? 'Вірно' : 'Невірно');

// 13
const number = 2;
let result = null;

switch (number) {
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
        result = 'невідома пора року';
}
console.log('Результат: ' + result);
