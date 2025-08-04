let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let min = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    index = i;
  }
}

console.log("Мінімальний елемент:", min);
console.log("Його індекс:", index);