const cities = {
    PL: `Poltava`,
    ODS: `Odessa`,
    KV: `Kyiv`,
    SM: `Symu`,
};

const genders = {
    M: `Male`,
    F: `Female`,
};

const languageNames = {
    en: "English",
    ua: "Ukrainian",
    fr: "French",
    de: "German"
};

document.querySelector(`button`).addEventListener(`click`, () => {
    const form = document.forms.signin;
    const name = form.name.value;
    const surname = form.surname.value;
    const birthDate = form.birthDate.value;
    const city = cities[form.city.value];
    const address = form.address.value;
    const gender = genders[form.gender.value];

    const languages = [];
    for (let i = 0; i < form.lang.length; i++) {
        if (form.lang[i].checked) {
            languages.push(languageNames[form.lang[i].value]);
        }
    }

    form.style.display = "none";

    const data = {
        "Name": name,
        "Surname": surname,
        "Birthdate": birthDate,
        "Gender": gender,
        "City": city,
        "Address": address,
        "Languages": languages.join(", ")
    };

    let tableHTML = `<table border="1" style="border-collapse: collapse; margin-top: 20px;">`;

    for (const key in data) {
        tableHTML += `
            <tr>
                <td>${key}</td>
                <td>${data[key]}</td>
            </tr>`;
    }

    tableHTML += `</table>`;

    document.querySelector(".table").innerHTML = tableHTML;
});