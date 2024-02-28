'use strict'

let temperature = parseFloat(prompt ('Введіть температуру'));
let unit = prompt('Введіть одиницю виміру (C чи F):');
if (unit.toUpperCase()==="C") {
    let convertedTemperature = (temperature * 9/5) + 32;
    alert('Температура у градусах Фаренгейта: ' + convertedTemperature.toFixed(2) + 'F');
}
else if (unit.toUpperCase()==='F'){
    let convertedTemperature = (temperature - 32) * 5/9;
    alert('Температура у градусах Цельсія: ' + convertedTemperature.toFixed(2) + 'C');
}