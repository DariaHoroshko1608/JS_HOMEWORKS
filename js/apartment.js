class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    if (person instanceof Person) {
      this.residents.push(person);
    } else {
      console.log("Тільки екземпляр класу Людина може бути доданий як житель.");
    }
  }

  toString() {
    return `Квартира №${this.residents.length}`;
  }
}
export default Apartment;

import Person from "./person.js";
