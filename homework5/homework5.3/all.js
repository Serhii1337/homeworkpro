let a = parseInt(prompt(`Введіть будь-яке число`))
let b = 1;


while (b <= 100){
    if(b * b <= a) {
        console.log(b)
    }
    b++;
}
