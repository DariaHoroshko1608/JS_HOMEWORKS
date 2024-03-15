'use strict'

const userNumber = function (number = 0, degree = 1){
    if (typeof number !== 'number' || typeof degree !== 'number'){
        return 'Помилка, всі значення мають бути числами';
    }
    return Math.pow(number , degree);
}
const num = prompt('Введіть число');
const deg = prompt('Введіть ступінь');
const result = userNumber(Number(num), Number(deg));
alert(`Результат піднесення числа ${num} до ступеню ${deg} дорівнює ${result}`);