'use strict'

//1
// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum = sum + arr[i]
// }
// console.log("Сума елементів масиву:", sum);

// 2

const arr = [1, 2, 3, 4, 5];
let sumNumber = 0;
for (let i = 0; i < arr.length; i++){
    sumNumber += Math.pow(arr[i], 2);
}
console.log("Сума квадратів елементів масиву:", sumNumber);