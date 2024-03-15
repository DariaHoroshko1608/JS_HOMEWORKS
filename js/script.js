'use strict'

const generateKey = function (length, charsets) {
    let key = '';
    for (let i = 0; i < length; i++){
        key += charsets [Math.floor(Math.random() * charsets.length)]
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key);