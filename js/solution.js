const ulElement = document.getElementById('ulId');
const liElements = ulElement.querySelectorAll('li');
const textArray = [];

for (const liElement of liElements) {
  console.log(liElement.textContent);
  textArray.push(liElement.textContent);
}

console.log(`Загальна кількість елементів: ${liElements.length}`);
console.log('Масив:', textArray);
