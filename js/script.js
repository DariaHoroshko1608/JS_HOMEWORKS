// 1
const getFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * getFactorial(n - 1);
};

const number = 3;
console.log(`Факторіал числа ${number} дорівнює: ${getFactorial(number)}`);

// 2
const pow = (num, degree) => {
  if (degree === 0) {
    return 1;
  }

  return num * pow(num, degree - 1);
};

const num = 10;
const degree = 2;
console.log(`${num} в степені ${degree} дорівнює: ${pow(num, degree)}`);

// 3

const recursiveSum = (a, b) => {
  if (b === 0) {
    return a;
  }

  return recursiveSum(a + 1, b - 1);
};

const a = 8;
const b = 2;
console.log(`Сума ${a} і ${b} дорівнює: ${recursiveSum(a, b)}`);
