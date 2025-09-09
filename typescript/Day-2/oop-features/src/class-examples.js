//This will not pollute the global scope
//This is just a syntatic sugar over function constructor
//Classes are not hoisted
//Classes are first-class citizens in TS
//Classes are executed in strict mode
//All class members are public by default
//Class members can be marked as private or protected
//TS supports parameter properties to reduce boilerplate code
//Classes can implement interfaces and extend other classes
//Abstract classes cannot be instantiated directly
//Getters and setters can be defined using get and set keywords
// class Person {
//     firstName: string;
//     lastName: string
//     city: string;
//     getPersonInfo(): string {
//         return `${this.firstName} ${this.lastName} from ${this.city}!`;
//     }
// }
// class Person {
//     constructor(fname: string, lname: string, city: string) {
//         this.firstName = fname;
//         this.lastName = lname;
//         this.city = city;
//     }
//     firstName: string;
//     lastName: string
//     city: string;
//     getPersonInfo(): string {
//         return `${this.firstName} ${this.lastName} from ${this.city}!`;
//     }
// }
//Constructor Parameter Properties [Ex. - In Angular, this syntax is used as dependency injection in components/services/directives...]
class Person {
    firstName;
    lastName;
    city;
    constructor(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }
    address = "123 Main St";
    getPersonInfo() {
        return `${this.firstName} ${this.lastName} from ${this.city}!`;
    }
}
//Customer - Is-A - Person
class Customer extends Person {
    constructor(firstName, lastName, city, id) {
        super(firstName, lastName, city);
        this.customerId = id;
    }
    customerId;
    changeAddress(oldAddress, newAddress) {
        console.log(`Customer ${this.firstName} ${this.lastName} changed address from ${oldAddress} to ${newAddress}`);
        this.address = newAddress;
        return true;
    }
}
class PrimeCustomer extends Customer {
    primeFees = 1499;
    subscription() {
        console.log(`${this.firstName} ${this.lastName} has subscribed to Prime Membership! You need to pay ${this.primeFees} annually.`);
    }
}
//const person: Person = new Person("Jane", "Smith", "Los Angeles");
const customer = new PrimeCustomer("Jane", "Smith", "Los Angeles", 101);
// person.firstName = "John";
// person.lastName = "Doe";
// person.city = "New York";
customer.address = "789 Pine St";
console.log(customer.changeAddress(customer.address, "456 Elm St"));
console.log(customer.getPersonInfo());
customer.subscription();
//console.log(typeof Person);
class Employee {
    _fullName;
    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        if (value.length < 5) {
            throw new Error("Name is too short.");
        }
        this._fullName = value;
    }
    _password;
    get password() {
        throw new Error("Property 'password' is readonly property! You can not read it back'.");
    }
    set password(value) {
        if (value.length < 8) {
            throw new Error("Password should be minimum 8 characters.");
        }
        this._password = value;
    }
}
const employee = new Employee();
employee.fullName = "John Doe";
employee.password = "password123";
console.log(employee.fullName);
//console.log(employee.password); //Error: Property '_password' is private and only accessible within class 'Employee'.
class Parent {
    constructor() {
        console.log("Parent class constructor executed!");
    }
}
class Child extends Parent {
    constructor() {
        super(); //If we don't call super() TS will throw an error
        console.log("Child class constructor executed!");
    }
}
class GrandChild extends Child {
    constructor() {
        super();
        console.log("GrandChild class constructor executed!");
    }
}
//Call happens from bottom to top
//Execution happens from top to bottom
const grandChild = new GrandChild();
//static members/classes [Sharing the data and logic across all instances of a class]
//Static members will never get reinitialized
class Counter {
    static count = 1;
    constructor() {
        console.log(`Counter incremented with count value 1 is = ${Counter.count++}`);
    }
    static incrementCounter() {
        return Counter.count++;
    }
}
const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();
const counter4 = new Counter();
console.log(Counter.incrementCounter());
//# sourceMappingURL=class-examples.js.map