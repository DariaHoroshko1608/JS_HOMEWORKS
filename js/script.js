'use strict'

const arr = [1, 2, 3, -1, -2, -3];

const foo = function (array) {
    const result = [];
    if (!array.length) return 'Порожній масив';
    for (let i = 0; i < array.length; i++) {
        const isPositive = Math.sign(array[i]) === 1 || Math.sign(array[i]) === 0
        isPositive && result.push(array[i])
    }
    return result.length ? result : null;
}

console.log(foo(arr));