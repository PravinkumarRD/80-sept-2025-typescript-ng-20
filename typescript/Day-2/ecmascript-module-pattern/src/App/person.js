"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Person Module Started!');
class Person {
    constructor() {
        console.log('Person Class Constructor Executed!');
    }
    firstName;
    lastName;
    city;
    getPersonInformation() {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
exports.default = Person;
console.log('Person Module Ended!');
//# sourceMappingURL=person.js.map