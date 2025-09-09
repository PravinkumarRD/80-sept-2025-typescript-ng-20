console.log('Person Module Started!');
export default class Person {
    constructor() {
        console.log('Person Class Constructor Executed!');
    }
    firstName: string;
    lastName: string;
    city: string;
    getPersonInformation(): string {
        return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
console.log('Person Module Ended!');