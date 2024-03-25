"use strict";

//1
const arr = ['a', 'b', 'c', 'd'];
const pairs = [];
for (let i = 0; i < arr.length; i += 2) {
    pairs.push(arr.slice(i, i + 2).join('+'));
}
const result = pairs.join(', ');
console.log(result);

//2
const arrOne  = [2, 5, 3, 9];
const resultOne  = arrOne [0] * arrOne [1] + arrOne [2] * arrOne [3];
console.log(resultOne);

//3
const arrayTwo  = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrayTwo[1][0]);

//4
const obj = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj.js[0]);

//5
const arrayThree  = [];
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += 'x';
    }
    arrayThree.push(str);
}

console.log(arrayThree);
//6
const arrayFour  = [];
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += i;
    }
    arrayFour.push(str);
}

console.log(arrayFour);

//7
const arrayFill = function(value, length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(value);
    }
    return array;
};

console.log(arrayFill('x', 5));
//8
const elementsToSum = function(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
        if (sum > 10) {
            break;
        }
    }
    return count;
};

const array = [2, 3, 5, 1, 2];
console.log(elementsToSum(array));

//9
const reverseArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
};

const arrayReverse = [1, 2, 3, 4, 5];
console.log(reverseArray(arrayReverse));

//10
const sumOfArrayElements = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumOfArrayElements(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
};
const arrayElements = [[1, 2, 3], [4, 5], [6]];
console.log(sumOfArrayElements(arrayElements));

 //11

const sumOfArrayElementsEight  = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumOfArrayElementsEight (arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
};

const arrayEight  = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
console.log(sumOfArrayElements(arrayEight));