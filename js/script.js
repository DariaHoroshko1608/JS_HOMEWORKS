'use strict'

const padString = function (str, len,padChar = '*',padLeft = true){
    if (typeof str !== 'string') return 'Помилка! Має бути рядок!';
    if (typeof len !== "number" || len < 0) return 'Помилка! Має бути додатнє число!';
    if (typeof padChar !== 'string' || padChar.length !==1 ) return 'Помилка! Має бути рядок довжиною один символ';
    if(typeof padLeft !== 'boolean') return ('Помилка! Має бути булевий тип данних!');

    if (str.length >= len) return str.substr(0, len);

    const padding = Array(len - str.length + 1).join(padChar);
    return padLeft ? str + padding : padding + str;
}

console.log(padString('hello', 8));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
console.log(padString(1608, 4));
console.log(padString('hello', -2));
console.log(padString('hello', 5, '***'));
console.log(padString('hello', 5, '*', 'true'));