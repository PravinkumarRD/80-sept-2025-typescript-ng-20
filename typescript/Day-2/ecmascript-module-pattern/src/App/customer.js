"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Customer Module Started!');
const person_1 = __importDefault(require("./person"));
class Customer extends person_1.default {
    constructor() {
        super();
        console.log('Customer Class Constructor Executed!');
    }
    customerId;
}
//Singleton pattern
exports.default = new Customer();
console.log('Customer Module Started!');
//# sourceMappingURL=customer.js.map