`use strict`

// reduce
const ordersCount = orders.reduce((initialValue, order) => {
    if (!initialValue[order.user]) {
        initialValue[order.user] = 0
    }

    initialValue[order.user]++
    return initialValue

}, {});

console.log(ordersCount)


// map
const ordersCount2 = new Map();

orders.forEach(order => {
    const user = order.user; 
    
    const count = ordersCount2.get(user) ?? 0;

    ordersCount2.set(user, count + 1 );
});

console.log(ordersCount2)



