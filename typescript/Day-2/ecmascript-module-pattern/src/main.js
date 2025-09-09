"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Main Module Started!');
//import { addition, multiplication, square } from "./App/basic-math";
const BoschMath = __importStar(require("./App/basic-math"));
const customer_1 = __importDefault(require("./App/customer"));
const customer_2 = __importDefault(require("./App/customer"));
const bosch_messages_1 = __importStar(require("./App/bosch-messages"));
console.log((0, bosch_messages_1.default)());
console.log((0, bosch_messages_1.hyderabadMessage)());
console.log(`Addition of two numbers is - ${BoschMath.addition(100, 200)}`);
console.log(`Multiplication of two numbers is - ${BoschMath.multiplication(100, 200)}`);
console.log(`Square From Main Module - of 30 is - ${BoschMath.square(30)} !`);
customer_1.default.firstName = "Manish";
customer_1.default.lastName = "Kaushik";
customer_1.default.city = "Bangalore";
console.log(customer_1.default.getPersonInformation());
console.log('');
console.log(customer_2.default.getPersonInformation());
console.log('Main Module Ended!');
//# sourceMappingURL=main.js.map