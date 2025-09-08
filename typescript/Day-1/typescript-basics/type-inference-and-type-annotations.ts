//Type Inference - Upon declaration and initalization of a variable, Typescript compiler will pickup an appropriate type from the type system and retain that type throughout the program

let num1 = 100;
num1 = 1000;
// num1 = "Pravinkumar R. D.";
// num1 = true;
// num1 = [];

//Type Annotations - We can explicitly specify the type of a variable during declaration. This is called type annotations

//Union Type
let currentDate: string | number;
currentDate = "Pravinkumar R. D.";
currentDate = 1000;
// currentDate = true;
// currentDate = [];

function addition(num1: number, num2: number): void {
    console.log(num1 + num2);
}

//console.log(100=="100");