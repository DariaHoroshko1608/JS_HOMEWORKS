'use strict'

// const arr = [1, 2, 3, -1, -2, -3];
// const filterPositiveNumbers = function (array){
//     const isArrayEmpty = (array) => {
//         return array.length === 0;
//     };
//
//     if (isArrayEmpty(array)) {
//         return "Порожній масив";
//     }
//
//     const positiveNumbers = [];
//
//     for (let i = 0; i < array.length; i++) {
//         const currentNumber = array[i];
//
//         if (currentNumber > 0) {
//             positiveNumbers.push(currentNumber);
//         }
//     }
//
//     if (positiveNumbers.length > 0) {
//         return positiveNumbers;
//     }
//     return null;
// };
//
// console.log(filterPositiveNumbers(arr));
function filterPositiveNumbers(arr) {
    const positiveNumbers = [];

    if (arr.length === 0) {
        return "Масив порожній";
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && positiveNumbers.push(arr[i])) {
        }
    }

    return positiveNumbers.length > 0 ? positiveNumbers : null;
}

// Приклад використання:
const arr = [1, 2, 3, -1, -2, -3];
console.log(filterPositiveNumbers(arr)); // Виведе: [1, 2, 3]