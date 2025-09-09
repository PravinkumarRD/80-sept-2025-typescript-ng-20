//Function-As-A-Class

function Person(fname, lname, city) {
    this.firstName = fname;
    this.lastName = lname;
    this.city = city;
    this.getPersonInfo=function(){
        return this.firstName + " " + this.lastName + " from " + this.city  +"!";
    }
    var _socialId = "123-45-6789"; //private variable
}

var person=new Person("John", "Doe", "New York");
console.log(person.getPersonInfo()); 