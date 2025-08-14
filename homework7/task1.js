function createSum() {
    let total = 0;

    return function (num) {
        total += num;
        return total;
    };
}

let sum = createSum();

console.log(sum(5));
console.log(sum(18));
console.log(sum(7));
console.log(sum(21));