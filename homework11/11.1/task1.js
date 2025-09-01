const container = document.querySelector(`.multiplicationTable`);
let result = `<table>`;

for (let i = 0; i <= 10; i++) {
    result += `<tr>`;
    for (let j = 0; j <= 10; j++) 
        
        if (i === 0) {
            result += `<td><b>${j}<b></td>`;
        } else if (j === 0) {
            result += `<td><b>${i}<b></td>`;
        } else {
            result += `<td>${i * j}</td>`;
        }
    }
    result += `</tr>`;


result += `</table>`;

container.innerHTML = result;