'use strict'

const numberUser = prompt("Введіть число:");

if (!isNaN(numberUser)) {
    const number = parseInt(numberUser);
    let yeards = null;

    if (number === 0 || (number >= 5 && number <= 20) || (number % 10 >= 5 && number % 10 <= 9)) {
        yeards = "років";
    } else if (number === 1 || number % 10 === 1) {
        yeards = "рік";
    } else if ((number >= 2 && number <= 4) || (number % 10 >= 2 && number % 10 <= 4)) {
        yeards = "роки";
    }

    alert(` ${number} ${yeards}.`);

} else {
    alert("Ви ввели не число.");
}