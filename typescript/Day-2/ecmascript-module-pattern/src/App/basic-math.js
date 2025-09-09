"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = void 0;
exports.addition = addition;
exports.multiplication = multiplication;
console.log('Basic Math Module Started!');
const advance_math_1 = require("./advance-math");
Object.defineProperty(exports, "square", { enumerable: true, get: function () { return advance_math_1.square; } });
function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
console.log(`Square From Basic Math - of 24 is - ${(0, advance_math_1.square)(24)} !`);
console.log('Basic Math Module Ended!');
//# sourceMappingURL=basic-math.js.map