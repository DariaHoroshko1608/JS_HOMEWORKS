"use strict";

const customFlat = (array) => {

    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    const isArrayFlat = (arr) => arr.every((el) => !Array.isArray(element));

    const flatten = (arr) => {
        const result = [];
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                result.push(...flatten(element));
            } else {
                result.push(element);
            }
        });
        return result;
    };

    if (isArrayFlat(array)) {
        return array.slice();
    }

    return flatten(array);
};

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
];

const flattenedArray = customFlat(complexArray);
console.log(flattenedArray);
