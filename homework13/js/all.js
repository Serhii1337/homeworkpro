const showCategories = () => {
    const parent = document.querySelector(`.categories`);
    if (!parent) return;

    parent.innerHTML = ``;
    const categoriesList = document.createElement(`ul`);

    categoriesList.addEventListener(`click`, (event) => {
        if (event.target && event.target.tagName === `LI`) {
            const categoryId = event.target.getAttribute(`data-category`);
            const category = categories[categoryId];
            if (!category) return;

            showProductsByCategory(category);
        }
    });

    Object.values(categories).forEach(category => {
        const element = document.createElement(`li`);
        element.textContent = category.name;
        element.setAttribute(`data-category`, category.id);
        categoriesList.appendChild(element);
    });

    parent.appendChild(categoriesList);
};

const showProductsByCategory = (category) => {
    const parent = document.querySelector(`.products`);
    const infoBox = document.querySelector(`.info`);
    if (!parent) return;

    parent.innerHTML = ``;
    infoBox.innerHTML = ``;

    const productsList = document.createElement(`ul`);

    productsList.addEventListener(`click`, (event) => {
        if (event.target && event.target.tagName === `LI`) {
            const categoryId = event.target.getAttribute(`data-category`);
            const productId = event.target.getAttribute(`data-product`);
            const category = categories[categoryId];
            if (!category) return;

            const product = category.products.find(p => p.id == productId);
            if (!product) return;

            infoBox.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><b>Price:</b> $${product.price}</p>
                <button class="buyBtn">Buy</button>
                <div class="formBox"></div>
            `;

            const btn = infoBox.querySelector(`.buyBtn`);
            btn.addEventListener(`click`, () => {
                renderOrderForm(product);
            });
        }
    });

    category.products.forEach(product => {
        const element = document.createElement(`li`);
        element.textContent = `${product.name} - $${product.price}`;
        element.setAttribute(`data-product`, product.id);
        element.setAttribute(`data-category`, category.id);
        productsList.appendChild(element);
    });

    parent.appendChild(productsList);
};

function renderOrderForm(product) {
    const formBox = document.querySelector(`.formBox`);
    formBox.innerHTML = `
        <h3>Оформлення замовлення</h3>
        <p>ПІБ:<br><input type="text" class="fullname"></p>
        <p>Місто:<br>
            <select class="city">
                <option value="">Оберіть місто</option>
                <option value="Київ">Київ</option>
                <option value="Полтава">Полтава</option>
                <option value="Одеса">Одеса</option>
                <option value="Харків">Харків</option>
            </select>
        </p>
        <p>Склад Нової Пошти:<br><input type="text" class="warehouse"></p>
        <p>Оплата:<br>
            <select class="payment">
                <option value="">Оберіть спосіб оплати</option>
                <option value="Накладений платіж">Накладений платіж</option>
                <option value="Оплата на рахунок">Оплата на рахунок</option>
            </select>
        </p>
        <p>Кількість одиниць:<br><input type="number" class="quantity"></p>
        <p>Коментар:<br><textarea class="comment"></textarea></p>
        <button class="confirmBtn">Підтвердити замовлення</button>
        <div class="error" style="color:red; font-weight:bold; margin-top:10px;"></div>
    `;

    const confirmBtn = formBox.querySelector(`.confirmBtn`);
    const errorBox = formBox.querySelector(`.error`);

    confirmBtn.addEventListener(`click`, () => {
        errorBox.textContent = ``;

        const fullname = formBox.querySelector(`.fullname`).value;
        const city = formBox.querySelector(`.city`).value;
        const warehouse = formBox.querySelector(`.warehouse`).value;
        const payment = formBox.querySelector(`.payment`).value;
        const quantity = formBox.querySelector(`.quantity`).value;
        const comment = formBox.querySelector(`.comment`).value;

        if (!fullname || !city || !warehouse || !payment || !quantity || quantity <= 0) {
            errorBox.textContent = `Неправильно заповнена форма`;
            return;
        }

        formBox.innerHTML = `
            <h3>Ваше замовлення підтвердженно</h3>
            <p><b>Товар:</b> ${product.name}</p>
            <p><b>Кількість:</b> ${quantity}</p>
            <p><b>Сума:</b> $${product.price}</p>
            <hr>
            <p><b>ПІБ:</b> ${fullname}</p>
            <p><b>Місто:</b> ${city}</p>
            <p><b>Склад Нової пошти:</b> ${warehouse}</p>
            <p><b>Оплата:</b> ${payment}</p>
            <p><b>Коментар:</b> ${comment}</p>
        `;
    });
}

showCategories();