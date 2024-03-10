'use strict'

const birthYear = prompt('Введіть свій рік народження');
if (birthYear === null){
    alert('Шкода, що ви не захотіли ввести свій рік народження')
}
const  city = prompt("Введіть місто, де ви живете:");
if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");}
    const favoriteSport = prompt("Введіть ваш улюблений вид спорту:");
if (favoriteSport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
}
const currentYear = new Date().getFullYear();
const age = currentYear - parseInt(birthYear);

let cityMessage = "";
if (city.toLowerCase() === "київ") {
    cityMessage = "Ти живеш у столиці України";
} else if (city.toLowerCase() === "вашингтон") {
    cityMessage = "Ти живеш у столиці США";
} else if (city.toLowerCase() === "лондон") {
    cityMessage = "Ти живеш у столиці Великої Британії";
} else {
    cityMessage = "Ти живеш у місті " + city + ".";
}

let sportMessage = "";
if (favoriteSport.toLowerCase() === "плавання") {
    sportMessage = "Круто! Хочеш стати як Михайло Романчук?";
} else if (favoriteSport.toLowerCase() === "футбол") {
    sportMessage = "Круто! Хочеш стати як Андрій Шевченко?";
} else if (favoriteSport.toLowerCase() === "бокс") {
    sportMessage = "Круто! Хочеш стати як Олександр Усик?";
} else {
    sportMessage = "Круто! Успіхів тобі в " + favoriteSport + '!';
}

alert("Ваш вік: " + age + "\n" + cityMessage + "\n" + sportMessage);

