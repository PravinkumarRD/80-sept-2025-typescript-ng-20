//Function Parameters are compulsory by default.


//SalesNetProfit = Incoming - Outgoing
//InComing - actualSales
//OutGoing - cogs, expenses, gst

// function salesNetProfit(cogs: number, expense: number, actualSales: number) {
//     return actualSales - (cogs + expense);
// }

//1) Solution - You can declare optional parameter
//All optional parameters should be at the end of the parameter list
// function salesNetProfit(cogs: number, expense: number, actualSales: number, gstPercent?: number) {
//     const gstAmount: number = actualSales * gstPercent / 100 || 0;
//     return actualSales - (cogs + expense + gstAmount);
// }

//2) Solution - You can declare default parameter
function salesNetProfit(cogs: number, expense: number = 15000, actualSales: number, gstPercent: number = 0) {
    const gstAmount: number = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(`Bosch Sales Net Profit without GST is INR ${salesNetProfit(12000, undefined, 150000)}/-`);
console.log(`Bosch Sales Net Profit with GST is INR ${salesNetProfit(12000, 13000, 150000, 18)}/-`);


//Problem Statement - How do you pass unbounded number of parameters to a function?
//Solution - Rest Parameters
//REST packs the parameters into an array
//Rules - There can be only one rest parameter in a function and it should be the last parameter
function travelCities(country: string, ...cities: string[]): void {
    console.log(`In Country ${country}!`);
    for (const city of cities) {
        console.warn(`Person is travelling to city - ${city}`);
    }
}

const TrainerTravelCities = ['Paris', 'Nice', 'Lyon', 'Marseille', 'Toulouse', 'Nantes']

travelCities('India', 'Bangalore', 'Mumbai', 'Chennai', 'Kolkata');
//Special Operator - Spread Operator
//Spread unpacks the array into individual parameters/can also unpack an object into individual properties
travelCities('France', ...TrainerTravelCities);
travelCities('UAE', 'Dubai', 'Abu Dhabi', 'Sharjah');

const PizzaOrder = {
    pizzaName: 'Farmhouse',
    price: 350,
    size: 'Large',
    toppings: ['Capsicum', 'Onion', 'Tomato', 'Paneer'],
    status: 'Order Placed'
}
const PizzaInOven = {
    ...PizzaOrder,
    status: 'In Oven'
}
const PizzaOutForDelivery = {
    ...PizzaInOven,
    status: 'Out for Delivery'
}

console.log(PizzaOrder);
console.log(PizzaInOven);
console.log(PizzaOutForDelivery);