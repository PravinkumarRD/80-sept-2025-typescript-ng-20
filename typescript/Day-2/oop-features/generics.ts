class BoschEmployee {
    constructor();
    constructor(employeeId: number,
        employeeName: string,
        city: string);

    constructor(public employeeId?: number,
        public employeeName?: string,
        public city?: string) {
        if (arguments.length === 0) {
            console.log("Default Constructor Executed!");
        } else {
            console.log("Parameterized Constructor Executed!");
        }
    }
}

class Product {
    constructor(public productId: number,
        public productName: string,
        public unitPrice: number,
        public isBlackListed?: boolean) {

    }
}

// T = Type
interface CommonCrud<T> {
    getAll(): T[];
    getDetails(id: number): T;
    insert(item: T): void;
    update(item: T): void;
    delete(id: number): void;
}

class CommnCurdOperations<T> implements CommonCrud<T> {
    private _inMemoryDb: Array<T> = new Array<T>();
    getAll(): T[] {
        return this._inMemoryDb;
    }
    getDetails(id: number): T {
        return this._inMemoryDb[0];
    }
    insert(item: T): void {
        this._inMemoryDb.push(item);
    }
    update(item: T): void {
        throw new Error("Method not implemented.");
    }
    delete(id: number): void {
        throw new Error("Method not implemented.");
    }
}

const e1: BoschEmployee = new BoschEmployee(2892, "Alisha C.", "Bangaluru");
const e2: BoschEmployee = new BoschEmployee(3462, "Manish Kaushik", "Raipur");
const e3: BoschEmployee = new BoschEmployee();
e3.employeeId = 7822;
e3.employeeName = "John Doe";
e3.city = "Berlin";

const p1: Product = new Product(100, "Dell Laptop", 120000, false);
const p2: Product = new Product(101, "Apple 4", 20000, true);


const employeeCrud: CommonCrud<BoschEmployee> = new CommnCurdOperations<BoschEmployee>();
employeeCrud.insert(e1);
employeeCrud.insert(e2);
employeeCrud.insert(e3);
console.log(employeeCrud.getAll())
console.log(employeeCrud.getDetails(e1.employeeId));

console.log('');

const productCrud: CommonCrud<Product> = new CommnCurdOperations<Product>();
productCrud.insert(p1);
productCrud.insert(p1);
console.log(productCrud.getAll());
console.log(productCrud.getDetails(p1.productId));