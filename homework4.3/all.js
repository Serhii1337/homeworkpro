let yearOfBirth = prompt(`Введіть свій рік народження`);
let city = prompt(`Введіть в якому місті ви проживаєте`);
let favoriteSport = prompt(`Введіть свій улюблений вид спорту`);

let age = 2025 - parseInt(yearOfBirth);
let cityMessage;
let favoriteSportMessage;


if (city === `Київ`) {
    cityMessage =  `Ти живеш в столиці України.`
} else if (city === `Лондон`) {
    cityMessage = `Ти живеш в столиці Великобританії`
} else if (city === `Вашингтон`) {
    cityMessage = `Ти живеш в столиці США`
} else {
    cityMessage = `ти живеш в місті ` + city
}

if (favoriteSport === `Бокс`) {
    favoriteSportMessage = `Круто! Хочешь стати як Олександр Усик?`
} else if (favoriteSport === `Баскетбол`) {
    favoriteSportMessage = `Круто! Хочешь стати як Майкл Джордан?`
} else if (favoriteSport === `Футбол`) {
    favoriteSportMessage = `Круто! Хочешь стати як Кріштіано Рональдо?`
} else {
    favoriteSportMessage = `Круто! Твій улюблений вид спорту ` + favoriteSport;
}

let message;
message = `Твій вік ` + age + ` років. ` + cityMessage + ` ` + favoriteSportMessage;

if (yearOfBirth === null) {
    message = cityMessage + ` ` + favoriteSportMessage + ` Шкода, що ви не захотіли ввести свою дату народження.`
} else if (city === null) {
    message = `Твій вік ` + age + ` років. ` + ` ` + favoriteSportMessage + ` Шкода, що ви не захотіли ввести своє місто.`
} else if (favoriteSport === null) {
    message = `Твій вік ` + age + ` років. ` + cityMessage + `Шкода, що ви не захотіли ввести свій улюблений вид спорту`
}

alert (message);