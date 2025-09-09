class BoschEmployee {
    employeeId;
    employeeName;
    city;
    constructor(employeeId, employeeName, city) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.city = city;
        if (arguments.length === 0) {
            console.log("Default Constructor Executed!");
        }
        else {
            console.log("Parameterized Constructor Executed!");
        }
    }
}
class Product {
    productId;
    productName;
    unitPrice;
    isBlackListed;
    constructor(productId, productName, unitPrice, isBlackListed) {
        this.productId = productId;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.isBlackListed = isBlackListed;
    }
}
class CommnCurdOperations {
    _inMemoryDb = new Array();
    getAll() {
        return this._inMemoryDb;
    }
    getDetails(id) {
        return this._inMemoryDb[0];
    }
    insert(item) {
        this._inMemoryDb.push(item);
    }
    update(item) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
const e1 = new BoschEmployee(2892, "Alisha C.", "Bangaluru");
const e2 = new BoschEmployee(3462, "Manish Kaushik", "Raipur");
const e3 = new BoschEmployee();
e3.employeeId = 7822;
e3.employeeName = "John Doe";
e3.city = "Berlin";
const p1 = new Product(100, "Dell Laptop", 120000, false);
const p2 = new Product(101, "Apple 4", 20000, true);
const employeeCrud = new CommnCurdOperations();
employeeCrud.insert(e1);
employeeCrud.insert(e2);
employeeCrud.insert(e3);
console.log(employeeCrud.getAll());
console.log(employeeCrud.getDetails(e1.employeeId));
console.log('');
const productCrud = new CommnCurdOperations();
productCrud.insert(p1);
productCrud.insert(p1);
console.log(productCrud.getAll());
console.log(productCrud.getDetails(p1.productId));
//# sourceMappingURL=generics.js.map