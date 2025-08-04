let length = parseInt(prompt("Введіть довжину масиву"));
let arr = [];

for (let i = 0; i < length; i++) {
    let digit = parseInt(prompt('Введіть будь-яке число ' + (i + 1)));
    arr.push(digit);
}

console.log("Початковий масив:", arr);

arr.sort(function(a, b) {
    return a - b;
});
console.log("Відсортований масив:", arr);

arr.splice(1, 3);
console.log("Масив після видалення з 2-го по 4-й елемент:", arr);