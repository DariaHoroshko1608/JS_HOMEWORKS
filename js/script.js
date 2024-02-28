'use strict'

const temperature = parseFloat(prompt ('Введіть температуру'));
const unit = prompt('Введіть одиницю виміру (C чи F):');
if (unit.toUpperCase()==="C") {
    const convertedTemperature = (temperature * 9/5) + 32;
    alert('Температура у градусах Фаренгейта: ' + convertedTemperature.toFixed(2) + 'F');
}
else if (unit.toUpperCase()==='F'){
    const convertedTemperature = (temperature - 32) * 5/9;
    alert('Температура у градусах Цельсія: ' + convertedTemperature.toFixed(2) + 'C');
}