const text = `
    Сьогодні ми запускаємо новий проєкт! #Launch #Project
    Дата старту: 08.09.2025, закінчення: 15.09.2025
    Більше інформації на сайті: https://google.com
    Слідкуйте за оновленнями: #Update #News`;


const hashtags = text.match(/#\w+/g);
console.log('Хештеги:', hashtags);

const dates = text.match(/\d{2}\.\d{2}\.\d{4}/g);
console.log('Дати:', dates);

const links = text.match(/https:\/\/[a-z]+\.com/gi);
console.log('Посилання:', links);