let a = parseInt(prompt(`Введіть будь-яке число більше за 1:`));
let b = 2;
let isPrime = true;

do {
  if (a % b === 0) {
    isPrime = false;
    break;
  }
  b++;
} while (b < a);

if (isPrime && a > 1) {
  console.log(`Число ${a} є простим`);
} else {
  console.log(`Число ${a} не є простим`);
}