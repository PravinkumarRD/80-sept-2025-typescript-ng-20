//Scoping in JavaScript ES5 [Function/Namespace/Clouser/IIFE]
//func1();
/*{
  let companyName = "Bosch Pvt. Ltd.";
}
console.log(companyName);

if (true) {
  var myName = "John Doe";
}
console.log(myName);
for (var i = 0; i < 5; i++) {
  //logic
}
console.log(i);

//Function-As-An-Expression

var func1 = function () {
  var city = "Mumbai";
  console.log(city);
};
//console.log(city);
console.log(100 == "100");
console.log(100 === "100");

var myName = "John Doe";
console.log(typeof myName);
myName = [];

console.log(typeof myName);

//Hoisting - During compile time, all the var declarations as well as functions are moved to the top of the scope [Memory Allocation Phase]
console.log(myFriendName);
var myFriendName = "Alisha C.";

var Customer = {
  name: "John Doe",
  age: 32,
  city: "New York",
};
//ES5 syntax
//Customer John Doe with age 32 lives in New York!

console.log("Customer " + Customer.name + " with \n\tage " + Customer.age + " lives in " + Customer.city + "!");
console.log("Customer %s with age %d lives in %s!",Customer.name,Customer.age,Customer.city);

function getCustomerInfo(){
    return "Customer " + Customer.name + " with age " + Customer.age + " lives in " + Customer.city + "!";
    //return "Customer %s with age %d lives in %s!",Customer.name,Customer.age,Customer.city;
}
console.log(getCustomerInfo());
*/

var Offices = ["Bangalore", "Chennai", "Hyderabad", "Pune"];

for (var i = 0; i < Offices.length; i++) {
  if (Offices[i] === "Hyderabad") break;
  console.log(Offices[i]);
}
console.log("");

for (var i in Offices) {
  if (Offices[i] === "Hyderabad") break;
  console.log(Offices[i]);
}
console.log("");

try {
  Offices.forEach(function (city) {
    if (city === "Hyderabad") throw Error("Hyderabad office is closed");
    console.log(city);
  });
} catch (error) {
  console.log(error.message);
}
