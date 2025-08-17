function askNumber() {

    for (let i = 0; i < 10; i++) {

        let num = prompt("Введіть число більше 100:");

        if (num > 100 || isNaN(num) || i === 9  ) {
            console.log("Останнє введене значення:", num);
            break;
        } else if (num <= 100) {
            alert("Число введено неправильно! Спробуйте ще раз.");
        }
    }
}

askNumber();