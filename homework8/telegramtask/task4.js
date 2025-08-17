const items = [
    { name: "apple", quantity: 2, price: 30 },
    { name: "banana", quantity: 5, price: 10 },
    { name: "orange", quantity: 3, price: 20 },
];

const withTotal = items.map(fruit => ({
    ...fruit,
    total:  fruit.quantity * fruit.price
}))

console.log(withTotal)


const sumPrice = withTotal.reduce((sum, price) => sum + price.total, 0)

console.log(sumPrice);
