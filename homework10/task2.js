const numbers = [1, 2, 5, 8, 9, 12, 17, 28, 34, 65, 446, 74, 875, 73, 4, 964, 745]

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
})

console.log(evenNumbers)