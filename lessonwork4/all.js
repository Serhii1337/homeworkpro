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





let distanseKm = parseInt(prompt(`Введіть першу відстань`));
let distanseFoot = parseInt(prompt(`Введіть другу відстань`));

distanseKm = distanseKm*1000;
distanseFoot = distanseFoot*0.305;

if (distanseKm > distanseFoot) {
    console.log(`Друге число менше`)
}
if  (distanseFoot > distanseKm) {
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





let someDigit = parseInt(prompt(`Напишіть будь-яке число`));

someDigit = someDigit % 2;

if (someDigit === 0) {
    console.log(`Число закінчується парною цифрою`)
} else {
    console.log(`Число закінчується непарною цифрою`)
}






let twoDigitNumber = parseInt(prompt(`Напишіть будь-яке двухзначне число`));

let digit1 = parseInt(twoDigitNumber/10);
let digit2 = parseInt(twoDigitNumber%10);

if (digit1 > digit2) {
    console.log(`Перша цифра більша за другу`)
} else {
    console.log(`Друга цифра більша за першу`)
}





let threeDigitNumber = parseInt(prompt(`Напишіть будь-яке трьохзначне число`));

let threeDigitNumber1 = parseInt(threeDigitNumber / 100);
let threeDigitNumber2 = parseInt(threeDigitNumber / 10) % 10;
let threeDigitNumber3 = (threeDigitNumber % 10);

if((threeDigitNumber1 + threeDigitNumber2 + threeDigitNumber3) % 2 === 0) {
    console.log(`Сума цифр трьохзначного числа є парною`)
} else {
    console.log(`Сума цифр трьохзначного числа є непарною`)
}




if ((threeDigitNumber1 + threeDigitNumber2 + threeDigitNumber3) % 5 === 0) {
    console.log(`Сума чисел трьохзначного числа кратна 5`)
} else {
    console.log(`Сума чисел трьохзначного числа не кратна 5`)
}




if ((threeDigitNumber1 * threeDigitNumber2 * threeDigitNumber3) > 100) {
    console.log(`Добуток цифр трьохзначного числа більше за 100`)
} else {
    console.log(`Добуток цифр трьохзначного числа менше за 100`)
}



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





let sixDigitNumber = parseInt(prompt(`Введіть шестизначне число`));

let sixDigitNumber1 = sixDigitNumber - (sixDigitNumber % 100000);
sixDigitNumber1 = sixDigitNumber1 / 100000;

let sixDigitNumber2 = (sixDigitNumber % 100000) - (sixDigitNumber % 10000);
sixDigitNumber2 = sixDigitNumber2 / 10000;

let sixDigitNumber3 = (sixDigitNumber % 10000) - (sixDigitNumber % 1000);
sixDigitNumber3 = sixDigitNumber3 / 1000;

let sixDigitNumber4 = (sixDigitNumber % 1000) - (sixDigitNumber % 100);
sixDigitNumber4 = sixDigitNumber4 / 100;

let sixDigitNumber5 = (sixDigitNumber % 100) - (sixDigitNumber % 10);
sixDigitNumber5 = sixDigitNumber5 / 10;

let sixDigitNumber6 = sixDigitNumber % 10;

if (sixDigitNumber1 === sixDigitNumber6, sixDigitNumber2 === sixDigitNumber5, sixDigitNumber3 === sixDigitNumber4) {
    console.log(`Дане число є дзеркальним`)
} else {
    console.log(`Дане число не э дзеркальним`)
}