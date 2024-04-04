"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1 indexOf
const indexOf = function (array, target, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
};

console.log(indexOf(numbers, 3));
console.log(indexOf(numbers, 10));

// 2 lastIndexOf
const lastIndexOf = function (array, target, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
};

console.log(lastIndexOf(numbers, 3));
console.log(lastIndexOf(numbers, 10));

// 3 find
const find = function (array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return undefined;
};

const evenNumber = find(numbers, function (number) {
    return number % 2 === 0;
});
console.log(evenNumber);

// 4 findIndex
const findIndex = function (array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    return -1;
};

const indexOfEvenNumber = findIndex(numbers, function (number) {
    return number % 2 === 0;
});
console.log(indexOfEvenNumber);
// 5 includes
const includes = function (array, target, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }
    return false;
};

console.log(includes(numbers, 3));
console.log(includes(numbers, 10));

// 6 every
const every = function (array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i], i)) {
            return false;
        }
    }
    return true;
};

console.log(every(numbers, function (number) {
    return number > 0;
}));
console.log(every(numbers, function (number) {
    return number > 1;
}));
// 7 some
const some = function (array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return true;
        }
    }
    return false;
};

console.log(some(numbers, function (number) {
    return number > 3;
})); // true
console.log(some(numbers, function (number) {
    return number > 6;
}));
// 8 reduce
const reduce = function (array, reducer, initialValue) {
    let accumulator = initialValue || array[0];
    let startIndex = initialValue ? 0 : 1;
    for (let i = startIndex; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i], i, array);
    }

    return accumulator;
};

const sum = reduce(numbers, function (accumulator, currentValue, index, array) {
    return accumulator + currentValue;
}, 0);

console.log(sum);