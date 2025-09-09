"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function nonExtendable(constructor) {
    return class extends constructor {
        constructor(...args) {
            if (new.target !== constructor) {
                throw new Error(`${constructor.name} class cannot be extended`);
            }
            super(...args);
        }
    };
}
let BajajCustomer = class BajajCustomer {
    contactName;
    constructor(contactName) {
        this.contactName = contactName;
    }
    getCustomerInfo() {
        return `Hello, ${this.contactName} From Bajaj Customer Support!`;
    }
};
BajajCustomer = __decorate([
    nonExtendable
], BajajCustomer);
// Attempt to extend the non-extendable BajajCustomer class
class BajajPrimeCustomer extends BajajCustomer {
    fees;
    constructor(message, fees) {
        super(message);
        this.fees = fees;
    }
    anualFees() {
        return `${this.getCustomerInfo()} Please pay INR ${this.fees}/-`;
    }
}
// This will throw an error
try {
    const extendedBajajCustomer = new BajajPrimeCustomer('world', 1499);
    console.log(extendedBajajCustomer.anualFees());
}
catch (e) {
    console.error(e.message);
}
const bajajCustomer = new BajajCustomer('world');
console.log(bajajCustomer.getCustomerInfo());
//# sourceMappingURL=sealed-class-decorator.js.map