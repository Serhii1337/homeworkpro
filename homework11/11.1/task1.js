const container = document.getElementById(`multiplicationTable`);
let result = ``;

for (let i = 0; i <= 10; i++) {
    
    for (let j = 0; j <= 10; j++) {
    
        if (i === 0) {
            result += j + ` `;
        } else if (j === 0) {
            result += i + ` `;
        } else {
            result += (i * j) + ` `;
        }
    }
    result += `<br>`;
}

container.innerHTML = result;