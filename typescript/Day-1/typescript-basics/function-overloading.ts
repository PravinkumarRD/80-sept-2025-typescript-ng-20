const Products = [
    {
        productId: 1,
        productName: 'Apple iPhone 14',
        price: 87000,
        category: 'Electronics',
        company: 'Apple',
        availableStock: 50
    },
    {
        productId: 2,
        productName: 'Samsung Galaxy S23',
        price: 75000,
        category: 'Electronics',
        company: 'Samsung',
        availableStock: 35
    }, {
        productId: 3,
        productName: 'Sony WH-1000XM4',
        price: 25000,
        category: 'Electronics',
        company: 'Sony',
        availableStock: 100
    },
    {
        productId: 4,
        productName: 'Samsung Galaxy',
        price: 30000,
        category: 'Electronics',
        company: 'Samsung',
        availableStock: 130
    },
    {
        productId: 5,
        productName: 'Apple iPhone 16',
        price: 160000,
        category: 'Electronics',
        company: 'Apple',
        availableStock: 25
    },
    {
        productId: 6,
        productName: 'Nokia 7',
        price: 18000,
        category: 'Electronics',
        company: 'Nokia',
        availableStock: 60
    }
];

function searchProducts(stock: number): string[];
function searchProducts(company: string): string[];
function searchProducts(value: number | string): string[] {
    let result: string[] = [];
    const localProducts = [...Products];
    if (value && typeof value === 'number') {
        for (const product of localProducts) {
            if (product.availableStock >= value) {
                result.push(product.productName);
            }
        }
    } else {
        for (const product of localProducts) {
            if (product.company.toLowerCase() === value.toString().toLowerCase()) {
                result.push(product.productName);
            }
        }
    }
    return result;
}


console.log(searchProducts(50));
console.log(searchProducts('Apple'));