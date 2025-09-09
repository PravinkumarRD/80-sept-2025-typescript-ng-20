console.log('Main Module Started!');
//import { addition, multiplication, square } from "./App/basic-math";
import * as BoschMath from "./App/basic-math";
import customerObj1 from "./App/customer";
import customerObj2 from "./App/customer";

import bangaloreMessage, { hyderabadMessage } from "./App/bosch-messages";

console.log(bangaloreMessage());
console.log(hyderabadMessage());

console.log(`Addition of two numbers is - ${BoschMath.addition(100, 200)}`);
console.log(`Multiplication of two numbers is - ${BoschMath.multiplication(100, 200)}`);
console.log(`Square From Main Module - of 30 is - ${BoschMath.square(30)} !`);
customerObj1.firstName = "Manish";
customerObj1.lastName = "Kaushik";
customerObj1.city = "Bangalore";
console.log(customerObj1.getPersonInformation());
console.log('');
console.log(customerObj2.getPersonInformation());

console.log('Main Module Ended!');