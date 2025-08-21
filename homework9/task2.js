`use strict`

// map + reduce
const sumOfOrder = orders.map(order => {
    const sum = order.items.reduce((initialValue, item) => initialValue + item.price, 0)

    return {user: order.user, sum: sum};
});

console.log(sumOfOrder);

const sumOfAllOrders = sumOfOrder.reduce((initialValue, order) => {
    initialValue[order.user] = (initialValue[order.user] ?? 0) + order.sum;

    return initialValue;
}, {});   

console.log(sumOfAllOrders)

// Map

const sumOfAllOrders2 = new Map();

orders.forEach(order => {
    const user = order.user;

    const sumOrder = order.items.reduce((initialValue, item) => initialValue + item.price, 0);
    
    sumOfAllOrders2.set(user, (sumOfAllOrders2.get(user) ?? 0) + sumOrder); 
});

console.log(sumOfAllOrders2)