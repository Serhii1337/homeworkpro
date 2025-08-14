function askNumber() {

    for (let i = 0; i <= 10; i++) {

        let num = parseInt(prompt("Введіть число більше 100:"));

        if (num === null) {
            return alert("Введення скасовано.");
        }

        if (num > 100) {
            console.log("Останнє введене значення:", num);
            break;
        } else {
            alert("Число введено неправильно! Спробуйте ще раз.");
        }
    }
}

askNumber();