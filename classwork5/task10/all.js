let a = 1;
let b = 1;

for(a = 1; a <= 10; a++){
    for( b = 1; b <= 10; b++){
        document.write(`${a} * ${b} = ${a * b};<br>`);
    }
    document.write(`<br>`);
}