console.log('Customer Module Started!');
import BasePerson from "./person";

class Customer extends BasePerson {
    constructor() {
        super();
        console.log('Customer Class Constructor Executed!');
    }
    customerId: number;
}

//Singleton pattern

export default new Customer();

console.log('Customer Module Started!');