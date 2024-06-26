class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment) {
      if (this.apartments.length < this.maxApartments) {
        this.apartments.push(apartment);
      } else {
        console.log("Максимальна кількість квартир досягнута.");
      }
    } else {
      console.log("Тільки екземпляр класу Квартира може бути доданий.");
    }
  }
}

export default House;

import Apartment from "./apartment.js";
