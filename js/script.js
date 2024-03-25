"use strict";

//1
const arrayOne =  [1, 2, 3];
const arrayTwo = [4, 5, 6];
const combinedArray = arrayOne.concat(arrayTwo);
console.log(combinedArray);

//2
const reversedArray = [1, 2, 3].reverse();
console.log(reversedArray);

//3
const array = [1, 2, 3];
array.push(4, 5, 6);
console.log(array);

//4
const arrayThre = [1, 2, 3];
const arrayThree = arrayThre.unshift(4, 5, 6);
console.log(arrayThree);

//5
const arrayFour = ['js', 'css', 'jq'];
console.log(arrayFour[0]);

//6

const arraySix  = ['js', 'css', 'jq'];
console.log(arraySix[arraySix.length - 1]);

//7
const arraySeven  = [1, 2, 3, 4, 5];
const newArraySeven  = arraySeven.slice(0, 3);
console.log(newArraySeven);

//8
const arrayEight  = [1, 2, 3, 4, 5];
const newArrayEight  = arrayEight.slice(3, 5);
console.log(newArrayEight);

//9
const arrayNine  = [1, 2, 3, 4, 5];
const arrayNineNew = arrayNine.splice(1, 2);
console.log(arrayNine);

//10
const arrayTen  = [1, 2, 3, 4, 5];
const newArrayTen  = arrayTen.slice(1, 4);
console.log(newArrayTen);

//11
const arrayEleven  = [1, 2, 3, 4, 5];
const arrayElevenNew = arrayEleven.splice(3, 0, 'a', 'b', 'c');
console.log(arrayEleven);

//12
const arrayTwelve = [1, 2, 3, 4, 5];
const arrayTwelveSplice= arrayTwelve.splice(1, 0, 'a', 'b');
const arayTwelveSplice= arrayTwelve.splice(6, 0, 'c');
const arrayTwelvePush = arrayTwelve.push('e');
console.log(arrayTwelve);

//13
const arrayThirteen = [3, 4, 1, 2, 7];
console.log(arrayThirteen.sort());
//14
const arrFourteen = [5, 6, 7, 8, 9];
const sumFourteen = arrFourteen.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumFourteen);

//15
const arrayFifteen = [5, 6, 7, 8, 9];
const squaredArrayFifteen = arrayFifteen.map(number => number * number);
console.log(squaredArrayFifteen);

//16
const arraySixteen = [1, -3, 5, 6, -7, 8, 9, -11];
const negativeNumbersSixteen = arraySixteen.filter(number => number < 0);
console.log(negativeNumbersSixteen);

//17
const arraySeventeen = [1, -3, 5, 6, -7, 8, 9, -11];
const evenNumbersSeventeen = arraySeventeen.filter(number => number % 2 === 0);
console.log(evenNumbersSeventeen);

//18
const arrayEighteen = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const filteredArrayEighteen = arrayEighteen.filter(str => str.length > 5);
console.log(filteredArrayEighteen);

//19
const arrayNineteen = [1, 2, [3, 4], 5, [6, 7]];
const subarraysNineteen = arrayNineteen.filter(item => Array.isArray(item));
console.log(subarraysNineteen);

//20
const arrayTwenty  = [5, -3, 6, -5, 0, -7, 8, 9];
const negativeCountTwenty  = arrayTwenty.filter(number => number < 0).length;
console.log(negativeCountTwenty);