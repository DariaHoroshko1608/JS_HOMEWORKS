'use strict'

const arr = [1, 2, 3, -1, -2, -3];
const filterPositiveNumbers = function (array){
    const isArrayEmpty = (array) => {
        return array.length === 0;
    };

    if (isArrayEmpty(array)) {
        return "Порожній масив";
    }

    const positiveNumbers = [];

    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i];

        if (currentNumber > 0) {
            positiveNumbers.push(currentNumber);
        }
    }

    if (positiveNumbers.length > 0) {
        return positiveNumbers;
    }
    return null;
};

console.log(filterPositiveNumbers(arr));