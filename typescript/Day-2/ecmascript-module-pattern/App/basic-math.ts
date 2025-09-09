console.log('Basic Math Module Started!');

import { square } from "./advance-math";

function addition(num1: number, num2: number): number {
    return num1 + num2;
}
function subtraction(num1: number, num2: number): number {
    return num1 - num2;
}
function division(num1: number, num2: number): number {
    return num1 / num2;
}
function multiplication(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(`Square From Basic Math - of 24 is - ${square(24)} !`);

//re-export

export { addition, multiplication, square }
console.log('Basic Math Module Ended!');