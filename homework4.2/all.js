let ThreeDigitNumber = parseInt(prompt(`Напишіть будь-яке трьохзначне число`));

ThreeDigitNumber1 = parseInt(ThreeDigitNumber / 100);
ThreeDigitNumber2 = parseInt(ThreeDigitNumber / 10) % 10;
ThreeDigitNumber3 = (ThreeDigitNumber % 10);

if (ThreeDigitNumber1 === ThreeDigitNumber2, ThreeDigitNumber1 === ThreeDigitNumber3, ThreeDigitNumber2 === ThreeDigitNumber3) {
    console.log(`Всі цифри однакові`)
} else {
    console.log(`Цифри не є однаковими`)
}


if (ThreeDigitNumber1 === ThreeDigitNumber2) {
    console.log(`Є однакові цифри`)
} else if (ThreeDigitNumber1 === ThreeDigitNumber3) {
    console.log(`Є однакові цифри`)
} else if (ThreeDigitNumber2 === ThreeDigitNumber3) {
    console.log(`Є однакові цифри`)
} else {
    console.log(`Немає однакових цифр`)
}