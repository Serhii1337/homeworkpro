`use strict`

const uniqueItems = new Set();
orders.forEach(order => {
    order.items.forEach(item => {
        uniqueItems.add(item.name)
    });
});

console.log(uniqueItems)