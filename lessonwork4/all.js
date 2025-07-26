let firtsDigit = parseInt(prompt(`Введіть перше число`));
let secondDigit = parseInt(prompt(`Введіть друге число`));

if (firtsDigit > secondDigit) {
    console.log(`Перше чило більше ніж друге`)
};

if (secondDigit > firtsDigit) {
    console.log(`Друге число більше перше`)
};

if (firtsDigit === secondDigit) {
    console.log(`Числа однакові`)
};





let DistanseKm = parseInt(prompt(`Введіть першу відстань`));
let DistanseFoot = parseInt(prompt(`Введіть другу відстань`));

DistanseKm = DistanseKm*1000;
DistanseFoot = DistanseFoot*0.305;

if (DistanseKm > DistanseFoot) {
    console.log(`Друге число менше`)
}
if  (DistanseFoot > DistanseKm) {
    console.log(`Перше число менше`)
}






let a = parseInt(prompt(`Введіть перше число`));
let b = parseInt(prompt(`Введіть друге число`));

if (a > b) {
    if (a % b === 0) {
        console.log(`Число a є дільником числа b`)
    }
}
if (b > a) {
    if (b % a === 0 ) {
        console.log(`Число b є дільником числа a`)
    }
}





let SomeDigit = parseInt(prompt(`Напишіть будь-яке число`));

SomeDigit = SomeDigit % 2;

if (SomeDigit === 0) {
    console.log(`Число закінчується парною цифрою`)
} else {
    console.log(`Число закінчується непарною цифрою`)
}






let TwoDigitNumber = parseInt(prompt(`Напишіть будь-яке двухзначне число`));

Digit1 = parseInt(TwoDigitNumber/10);
Digit2 = parseInt(TwoDigitNumber%10);

if (Digit1 > Digit2) {
    console.log(`Перша цифра більша за другу`)
} else {
    console.log(`Друга цифра більша за першу`)
}





let ThreeDigitNumber = parseInt(prompt(`Напишіть будь-яке трьохзначне число`));

ThreeDigitNumber1 = parseInt(ThreeDigitNumber / 100);
ThreeDigitNumber2 = parseInt(ThreeDigitNumber / 10) % 10;
ThreeDigitNumber3 = (ThreeDigitNumber % 10);

if((ThreeDigitNumber1 + ThreeDigitNumber2 + ThreeDigitNumber3) % 2 === 0) {
    console.log(`Сума цифр трьохзначного числа є парною`)
} else {
    console.log(`Сума цифр трьохзначного числа є непарною`)
}




if ((ThreeDigitNumber1 + ThreeDigitNumber2 + ThreeDigitNumber3) % 5 === 0) {
    console.log(`Сума чисел трьохзначного числа кратна 5`)
} else {
    console.log(`Сума чисел трьохзначного числа не кратна 5`)
}




if ((ThreeDigitNumber1 * ThreeDigitNumber2 * ThreeDigitNumber3) > 100) {
    console.log(`Добуток цифр трьохзначного числа більше за 100`)
} else {
    console.log(`Добуток цифр трьохзначного числа менше за 100`)
}



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





let SixDigitNumber = parseInt(prompt(`Введіть шестизначне число`));

let SixDigitNumber1 = SixDigitNumber - (SixDigitNumber % 100000);
SixDigitNumber1 = SixDigitNumber1 / 100000;

let SixDigitNumber2 = (SixDigitNumber % 100000) - (SixDigitNumber % 10000);
SixDigitNumber2 = SixDigitNumber2 / 10000;

let SixDigitNumber3 = (SixDigitNumber % 10000) - (SixDigitNumber % 1000);
SixDigitNumber3 = SixDigitNumber3 / 1000;

let SixDigitNumber4 = (SixDigitNumber % 1000) - (SixDigitNumber % 100);
SixDigitNumber4 = SixDigitNumber4 / 100;

let SixDigitNumber5 = (SixDigitNumber % 100) - (SixDigitNumber % 10);
SixDigitNumber5 = SixDigitNumber5 / 10;

let SixDigitNumber6 = SixDigitNumber % 10;

if (SixDigitNumber1 === SixDigitNumber6, SixDigitNumber2 === SixDigitNumber5, SixDigitNumber3 === SixDigitNumber4) {
    console.log(`Дане число є дзеркальним`)
} else {
    console.log(`Дане число не э дзеркальним`)
}