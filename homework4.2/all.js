let threeDigitNumber = parseInt(prompt(`Напишіть будь-яке трьохзначне число`));

threeDigitNumber1 = parseInt(threeDigitNumber / 100);
threeDigitNumber2 = parseInt(threeDigitNumber / 10) % 10;
threeDigitNumber3 = (threeDigitNumber % 10);

if (threeDigitNumber1 === threeDigitNumber2 && threeDigitNumber1 === threeDigitNumber3 && threeDigitNumber2 === threeDigitNumber3) {
    console.log(`Всі цифри однакові`)
} else {
    console.log(`Цифри не є однаковими`)
}


if (threeDigitNumber1 === threeDigitNumber2) {
    console.log(`Є однакові цифри`)
} else if (threeDigitNumber1 === threeDigitNumber3) {
    console.log(`Є однакові цифри`)
} else if (threeDigitNumber2 === threeDigitNumber3) {
    console.log(`Є однакові цифри`)
} else {
    console.log(`Немає однакових цифр`)
}