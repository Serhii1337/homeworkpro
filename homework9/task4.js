`use strict`

const sumOfOrder = orders.map(order => {
    const sum = order.items.reduce((initialValue, item) => initialValue + item.price, 0)

    return {user: order.user, sum: sum};
});

const sumOfAllOrders = sumOfOrder.reduce((initialValue, order) => {
    initialValue[order.user] = (initialValue[order.user] ?? 0) + order.sum;

    return initialValue;
}, {});

console.log(sumOfAllOrders)

const biggestOrder = Object.keys(sumOfAllOrders).reduce((sum, user) => {

    const total = sumOfAllOrders[user];

    if (total > sum.total) {
        return { user, total };
    } else {
        return sum;
    }
    
}, { user: '', total: 0 });

console.log(biggestOrder);