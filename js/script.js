'use strict'

const  getPositiveNumbers= function (arr){
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'Invalid input data';
    }

    const positiveNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];

        if (currentNumber > 0) {
            positiveNumbers.push(currentNumber);
        }
    }

    return positiveNumbers.length > 0 ? positiveNumbers : null;
};

const arr = [1, 2, 3, -1, -2, -3];
console.log(getPositiveNumbers(arr)); // [1, 2, 3]

const emptyArr = [];
console.log(getPositiveNumbers(emptyArr)); // null

const invalidData = 'Invalid data';
console.log(getPositiveNumbers(invalidData)); // 'Invalid input data'