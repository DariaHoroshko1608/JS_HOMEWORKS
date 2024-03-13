'use strict'

const userNumber = prompt("Введіть число:");

if (!isNaN(userNumber) && userNumber !== null) {
    const number = parseInt(userNumber);
    let suffix = null;

    if (number === 1) {
        suffix = "рік";
    } else if (number >= 2 && number <= 4) {
        suffix = "роки";
    } else {
        suffix = "років";
    }

    alert(number + " " + suffix);

} else {
    alert("Будь ласка, введіть коректне число!");
}