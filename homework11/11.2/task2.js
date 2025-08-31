const textBox = document.getElementById(`textBox`);
const button = document.getElementById(`button`);

let red = false;

button.addEventListener(`click`, () => {
        if (!red) textBox.classList.add(`red`);
    else textBox.classList.remove(`red`);
    red = !red
});