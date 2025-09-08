const Employee = {
    employeeId: 8922,
    employeeName: 'Manish Kaushik',
    city: 'Raipur',
    printEmployeeInfo: function () {
        setTimeout(() => {
            console.log(this);
            console.log("Employee Id %d, Employee Name %s, City %s!", this.employeeId, this.employeeName, this.city);
        }, 2000);
    }
};
//Employee.printEmployeeInfo();
const msg = () => console.log("Hello Bosch Bangalore!");
msg();
const square = (num) => num * num;
console.log(square(5));
const sumAndAvg = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    const avg = sum / 3;
    console.log("Sum %d, Average %d", sum, avg);
    return sum;
};
console.log("Sum is %d", sumAndAvg(10, 20, 30));
//# sourceMappingURL=arrow-functions.js.map