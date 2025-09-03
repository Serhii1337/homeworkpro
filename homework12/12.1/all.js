let receivedLink = ``;

document.querySelector(`.get-link`).addEventListener(`click`, function() {
    const link = prompt(`Введіть посилання`)
    receivedLink = link
})

document.querySelector(`.go-link`).addEventListener(`click`, function() {
    window.location.href = receivedLink;
})