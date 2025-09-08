//Function parameters are optional in JavaScript.

// function addition(num1) {
//   return num1 + 1000;
// }

// function addition(num1, num2) {
//   return num1 + num2;
// }

// function addition(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// function addition() {
//   if (arguments.length === 1) {
//     return arguments[0] + 1000;
//   } else if (arguments.length === 2) {
//     return arguments[0] + arguments[1];
//   } else if (arguments.length === 3) {
//     return arguments[0] + arguments[1] + arguments[2];
//   } else {
//     return arguments[0] + arguments[1] + arguments[2] + arguments[3];
//   }
// }

// console.log(addition(1000)); //NaN
// console.log(addition(1000, 2000)); //NaN
// console.log(addition(1000, 2000, 3000)); //6000
// console.log(addition(1000, 2000, 3000, 4000)); //6000

// var Employee ={
//     employeeId:8922,
//     employeeName:'Manish Kaushik',
//     city:'Raipur',
//     printEmployeeInfo:function(){
//         setTimeout(function(){
//             console.log("Employee Id %d, Employee Name %s, City %s!",this.employeeId,this.employeeName,this.city);
//         }, 2000);
//     }
// }

//this aliasing
// var Employee ={
//     employeeId:8922,
//     employeeName:'Manish Kaushik',
//     city:'Raipur',
//     printEmployeeInfo:function(){
//         let _self = this;
//         setTimeout(function(){
//             console.log("Employee Id %d, Employee Name %s, City %s!",_self.employeeId,_self.employeeName,_self.city);
//             //console.log("Employee Id %d, Employee Name %s, City %s!",this.employeeId,this.employeeName,this.city);
//         }, 2000);
//     }
// }

var Employee ={
    employeeId:8922,
    employeeName:'Manish Kaushik',
    city:'Raipur',
    printEmployeeInfo:function(){
        setTimeout(function(){
            console.log("Employee Id %d, Employee Name %s, City %s!",this.employeeId,this.employeeName,this.city);
        }.bind(this), 2000);
    }
}

Employee.printEmployeeInfo();