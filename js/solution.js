
const ulElement = document.getElementById('ulId');

const ulAttributes = ulElement.attributes;

const attributeValues = [];

for (const attribute of ulAttributes) {
    attributeValues.push(attribute.value);
}

console.log(attributeValues);

const ulElementOne = document.getElementById('ulId');

const ulAttributesOne = ulElement.attributes;

const attributeNames = [];

for (const attribute of ulAttributes) {
    attributeNames.push(attribute.name);
}

console.log(attributeNames);

const liElements = document.querySelectorAll('#ulId li');

const lastLiElement = liElements[liElements.length - 1];

lastLiElement.textContent = 'Привіт, моє ім\'я Даша';

const firstLiElement = document.querySelector('#ulId li:first-child');

firstLiElement.setAttribute('data-my-name', 'Даша');

const ulElementTwo = document.getElementById('ulId');

ulElementTwo.removeAttribute('data-dog-tail');



