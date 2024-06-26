import Person from "./person.js";
import Apartment from "./apartment.js";
import House from "./house.js";

// Створення екземплярів класу Людина
const person1 = new Person("Іван", "чоловік");
const person2 = new Person("Ольга", "жінка");
const person3 = new Person("Андрій", "чоловік");

// Створення екземплярів класу Квартира
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

// Додавання екземплярів класу Людина до екземплярів класу Квартира
apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);
apartment1.addResident(person2); // додавання ще одного жителя

// Створення екземпляра класу Будинок
const house = new House(2);

// Додавання екземплярів класу Квартира до екземплярів класу Будинок
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3); // ця квартира не буде додана, оскільки досягнуто максимальну кількість квартир

house.apartments.forEach((apartment) => {
  console.log(`Квартира ${apartment} має жителів:`);
  apartment.residents.forEach((resident) => {
    console.log(`  - ${resident.name} (${resident.gender})`);
  });
});
