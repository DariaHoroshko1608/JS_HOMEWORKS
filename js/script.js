'use strict'

let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('Ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}

// switch (numOrStr) {
//     case null :
//         console.log('Ви скасували');
//         break;
//     case '' :
//         console.log('Empty String');
//         break;
//     case isNaN(+numOrStr):
//         console.log('number is Ba_NaN'); * не працює(
//         break;
//     default:
//         console.log('OK!');
//         break;
// }