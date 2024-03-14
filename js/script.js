'use strict'

const number = parseInt(prompt("Введіть ціле число:"));

if (!isNaN(number)) {
    if (number <= 0) {
        console.log("NaN");
    }
    let divider = 2;
    while (number % divider !== 0) {
        divider++;
    }
    console.log(`Мінімальний дільник числа: ${divider}`);
} else {
    console.log("NaN");
}