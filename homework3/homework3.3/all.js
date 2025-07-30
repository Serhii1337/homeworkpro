let number = 10369;

let digit1 = number - (number % 10000);
digit1 = digit1 / 10000;

let digit2 = (number % 10000) - (number % 1000);
digit2 = digit2 / 1000;

let digit3 = (number % 1000) - (number % 100);
digit3 = digit3 / 100;

let digit4 = (number % 100) - (number % 10);
digit4 = digit4 / 10;

let digit5 = number % 10;

console.log(digit1, digit2, digit3, digit4, digit5);

