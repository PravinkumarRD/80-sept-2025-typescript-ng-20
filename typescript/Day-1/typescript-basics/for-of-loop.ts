const BoschOffices = ['Bangalore', 'Pune', 'Chennai', 'Hyderabad', 'Mumbai'];

for (const city of BoschOffices) {
    //if (city == "Hyderabad") break;
    console.log(city);
}

const Result = BoschOffices[Symbol.iterator]();
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());
console.log(Result.next());