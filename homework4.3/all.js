let YearOfBirth = prompt(`Введіть свій рік народження`);
let City = prompt(`Введіть в якому місті ви проживаєте`);
let FavoriteSport = prompt(`Введіть свій улюблений вид спорту`);

age = 2025 - parseInt(YearOfBirth);

if (City === `Київ`) {
    CityMessage =  `Ти живеш в столиці України.`
} else if (City === `Лондон`) {
    CityMessage = `Ти живеш в столиці Великобританії`
} else if (City === `Вашингтон`) {
    CityMessage = `Ти живеш в столиці США`
} else {
    CityMessage = `ти живеш в місті ` + City
}

if (FavoriteSport === `Бокс`) {
    FavoriteSportMessage = `Круто! Хочешь стати як Олександр Усик?`
} else if (FavoriteSport === `Баскетбол`) {
    FavoriteSportMessage = `Круто! Хочешь стати як Майкл Джордан?`
} else if (FavoriteSport === `Футбол`) {
    FavoriteSportMessage = `Круто! Хочешь стати як Кріштіано Рональдо?`
} else {
    FavoriteSportMessage = `Круто! Твій улюблений вид спорту ` + FavoriteSport;
}

let message;
message = `Твій вік ` + age + ` років. ` + CityMessage + ` ` + FavoriteSportMessage;

if (YearOfBirth === null) {
    message = CityMessage + ` ` + FavoriteSportMessage + ` Шкода, що ви не захотіли ввести свою дату народження.`
} else if (City === null) {
    message = `Твій вік ` + age + ` років. ` + ` ` + FavoriteSportMessage + ` Шкода, що ви не захотіли ввести своє місто.`
} else if (FavoriteSport === null) {
    message = `Твій вік ` + age + ` років. ` + CityMessage + `Шкода, що ви не захотіли ввести свій улюблений вид спорту`
}

alert (message);