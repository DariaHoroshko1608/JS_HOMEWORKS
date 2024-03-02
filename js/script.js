'use strict'

//1

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

//2 Це працюватиме, бо ми не переприсвоюємо об*єкт, а змінюємо його властивість.

//3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);