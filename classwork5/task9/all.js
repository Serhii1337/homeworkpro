let a = parseInt(prompt(`Введіть будь-яке число більше за 0`));
let divisor = 1;
let evenDivisor = 0;
let sumEvenDivisor = 0

while (divisor <= a) {
    if (a % divisor === 0) {
        console.log(`${divisor}; `);
        if (divisor % 2 === 0) {
            evenDivisor++;
            sumEvenDivisor = sumEvenDivisor + divisor;
        }
    }
    divisor++;
}

console.log(`Кількіть парних дільників: ${evenDivisor}`);
console.log(`Сума парних дільників: ${sumEvenDivisor}`);
