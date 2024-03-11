'use strict'

//1

const x = 10, y = 7;
let operator = (x > y) ? "x більше за y" : "x не більше, ніж y";
console.log(operator);

//2

const number = prompt('Введіть ціле число:')
let length = Math.abs(number).toString().length;
let sign = (number > 0) ? "позитивне" : (number < 0) ? "негативне" : "нуль";
switch (length) {
    case 1:
        console.log("Число " + number + " є однозначне " + sign);
        break;
    case 2:
        console.log("Число " + number + " є двозначне " + sign);
        break;
    case 3:
        console.log("Число " + number + " є трьохзначне " + sign);
        break;
    default:
        console.log("Число " + number + " має більше трьох цифр і є " + sign);
}

//3

const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));
const num3 = parseFloat(prompt("Введіть третє число:"));

if (num1 >= num2 && num1 >= num3) {
    console.log("Найбільше число: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Найбільше число: " + num2);
} else {
    console.log("Найбільше число: " + num3);
}

//4

const side1 = parseFloat(prompt("Введіть довжину першої сторони:"));
const side2 = parseFloat(prompt("Введіть довжину другої сторони:"));
const side3 = parseFloat(prompt("Введіть довжину третьої сторони:"));

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("Трикутник існує");
} else {
    console.log("Такий трикутник не може існувати");
}


