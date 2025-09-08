//Block level scoping - let and const

{
    let num1 = 100;
}
//console.log(num1);

if (true) {
    let num2 = 200;
}
//console.log(num2);
for (let index = 0; index < 5; index++) {
    //some logic
}
//console.log(index);

//Hoisting - let and const are hoisted in TDZ [Temporal Dead Zone] where they cannot be accessed before initialization]
//console.log(myFriendName);
{
    let myFriendName = "Alisha C.";
}
//let myFriendName = "Manish K.";
let myFriendName = "Manish Kaushik";