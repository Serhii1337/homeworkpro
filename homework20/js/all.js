// Bootstrap
const tooltipsBtn = document.getElementById('tooltip')
new bootstrap.Tooltip(tooltipsBtn)

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Alert message!', 'success')
    })
}


// Moment
const myBirthday = moment(`13-05-2004`, `DD-MM-YYYY`)
console.log(myBirthday.format(`LL`))




const birth = document.getElementById('birth');
const alert = document.getElementById('alert');

document.getElementById('btn').onclick = () => {
    const userDate = birth.value.trim();
    const regEx = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regEx.test(userDate) || !moment(userDate, 'DD/MM/YYYY',).isValid()) {
        alert.innerHTML = `<div class="alert alert-danger">Wrong date!</div>`;
    } else {
        alert.innerHTML = `<div class="alert alert-success">${moment(userDate, 'DD/MM/YYYY').format('YYYY-MM-DD')}</div>`;
    }
};