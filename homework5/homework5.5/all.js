let number = parseInt(prompt("Введіть число:"));
let power = 1;

while (power < number) {
  power = power * 3;
}

if (power === number) {
  console.log(`Число ${number} можна отримати шляхом возведення числа 3 в деяку ступінь.`);
} else {
  console.log(`Число ${number} не можна отримати шляхом возведення числа 3 в деяку ступінь.`);
}
