// let peopleUrl = 'https://swapi.dev/api/people/';
// let planetsUrl = 'https://swapi.dev/api/planets/';
// let vehiclesUrl = 'https://swapi.dev/api/vehicles/';

// const peopleList = document.querySelector('.characters ul');
// const peopleBtn = document.querySelector('.characters .show-more');

// const planetsList = document.querySelector('.planets ul');
// const planetsBtn = document.querySelector('.planets .show-more');

// const vehiclesList = document.querySelector('.vehicles ul');
// const vehiclesBtn = document.querySelector('.vehicles .show-more');

// function loadPeople() {
//     fetch(peopleUrl)
//         .then(res => res.json())
//         .then(result => {
//             showItems(result.results, peopleList);
//             peopleUrl = result.next;
//             hideBtn(peopleBtn, result.next);
//         });
// }

// function loadPlanets() {
//     fetch(planetsUrl)
//         .then(res => res.json())
//         .then(result => {
//             showItems(result.results, planetsList);
//             planetsUrl = result.next;
//             hideBtn(planetsBtn, result.next);
//         });
// }

// function loadVehicles() {
//     fetch(vehiclesUrl)
//         .then(res => res.json())
//         .then(result => {
//             showItems(result.results, vehiclesList);
//             vehiclesUrl = result.next;
//             hideBtn(vehiclesBtn, result.next);
//         });
// }

// function showItems(items, list) {
//     items.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item.name;
//         list.appendChild(li);
//     });
// }

// function hideBtn(btn, nextUrl) {
//     if (nextUrl) {
//         btn.style.display = 'block';
//     } else {
//         btn.style.display = 'none';
//     }
// }

// peopleBtn.addEventListener('click', loadPeople);
// planetsBtn.addEventListener('click', loadPlanets);
// vehiclesBtn.addEventListener('click', loadVehicles);

// loadPeople();
// loadPlanets();
// loadVehicles();






let peopleUrl = 'https://swapi.dev/api/people/'
let planetsUrl = 'https://swapi.dev/api/planets/'
let vehiclesUrl = 'https://swapi.dev/api/vehicles/'

const peopleList = document.querySelector('.characters ul')
const peopleBtn = document.querySelector('.characters .show-more')

const planetsList = document.querySelector('.planets ul')
const planetsBtn = document.querySelector('.planets .show-more')

const vehiclesList = document.querySelector('.vehicles ul')
const vehiclesBtn = document.querySelector('.vehicles .show-more')

function showList(url, list, btn, nextUrl) {
    fetch(url)
        .then(res => res.json())
        .then(result => {
            showItems(result.results, list)
            nextUrl(result.next)
            hideBtn(btn, result.next)
        });
}

function showItems(items, list) {
    items.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name
        list.appendChild(li)
    });
}

function hideBtn(btn, nextUrl) {
    if (nextUrl) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

peopleBtn.addEventListener('click', () => {
    showList(peopleUrl, peopleList, peopleBtn, next => (peopleUrl = next))
})

planetsBtn.addEventListener('click', () => {
    showList(planetsUrl, planetsList, planetsBtn, next => (planetsUrl = next))
})

vehiclesBtn.addEventListener('click', () => {
    showList(vehiclesUrl, vehiclesList, vehiclesBtn, next => (vehiclesUrl = next))
})

showList(peopleUrl, peopleList, peopleBtn, next => (peopleUrl = next))
showList(planetsUrl, planetsList, planetsBtn, next => (planetsUrl = next))
showList(vehiclesUrl, vehiclesList, vehiclesBtn, next => (vehiclesUrl = next))