'use strict'

// 1

for (let i = 20; i <= 30; i += 0.5) {
    document.write(i + " ");
}

// 2

const course = 27;
for (let dollars = 10; dollars <=100; dollars +=10 ){
    let result  = course * dollars;
    document.write("$" + dollars + " = " + result + " грн<br>");
}


//3

const N = 99;
for (let i = 1; i <= 100 ; i++) {
    if (i * i <= N) {
        document.write(i + " ");
    }
}

// 4
const number = 2;
let isPrime = true;
if (number <= 1) {
    isPrime = false;}
else {
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
document.write('<br>' + number + " - " + (isPrime ? "просте" : "не просте"));

// 5

const numberPlus = 88;
let numberOne = false;
for (let mathNumber = 0; Math.pow(3, mathNumber) <= numberPlus; mathNumber++) {
    if (Math.pow(3, mathNumber) === numberPlus) {
        numberOne = true;
        break;
    }
}
document.write('<br>' + numberPlus + " " + (numberOne ? "можна" : "не можна"));