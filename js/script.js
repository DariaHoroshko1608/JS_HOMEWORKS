'use strict'

//1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

let number = '';
for (let i = 10; i <= 20; i++){
    number += i;
    if (i < 20){
        number += ',';
    }
}
document.write(number);

//2 Вивести квадрати чисел від 10 до 20.

for (let i = 10; i <= 20; i++) {
    let quadrat = i * i;
    document.write(quadrat);

    if (i < 20) {
        document.write(', ');
    }
}

//3 Вивести таблицю множення на 7.

for (let i = 1; i <=10; i++) {
    let result = i * 7;
    document.write(i + " * 7 = " + result + "<br>");
}

//4 Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;
for (let i = 1; i <= 15; i++){
    sum += i;
}
document.write("Сума всіх цілих чисел від 1 до 15: " + sum);

//5 Знайти добуток усіх цілих чисел від 15 до 35.

let number = 1;
for (let i = 15; i <= 35; i++) {
    number *= i;
}
document.write("Добуток усіх цілих чисел від 15 до 35: " + number);

//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum = 0;
let number = 0;
for (let i = 1; i <= 500; i++){
    sum += i;
    number ++;
}
let average = sum / number;
document.write("Середнє арифметичне всіх цілих чисел від 1 до 500: " + average);

//7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0;
for (let i = 30; i <= 80; i++)  {
    if (i % 2 === 0) {
        sum += i;
    }
}
document.write("Сума лише парних чисел в діапазоні від 30 до 80: " + sum);

//8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        document.write(i + ', ');
    }
}

//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let number = 24;
document.write("Дільники числа " + number + ": ");
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write(i + ", ");
    }
}

//10 Визначити кількість його парних дільників.

let number = 24;
let divisor = 0;
for (let i = 1; i <= number; i++) {
    // Перевіряємо, чи число є дільником заданого числа та чи є воно парним
    if (number % i === 0 && i % 2 === 0) {
        divisor++; // Збільшуємо кількість парних дільників
    }
}
document.write("Кількість парних дільників числа " + number + ": " + divisor);

//11 Знайти суму його парних дільників.

let number = 24;
let sum = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sum += i;
    }
}

document.write("Сума парних дільників числа " + number + ": " + sum);

//12 Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i + " * " + j + " = " + (i * j) + "<br>");
    }
    document.write("<br>");
}