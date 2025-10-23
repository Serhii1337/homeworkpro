const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const addBtn = document.getElementById('add-btn');

function loadTodos() {
    fetch('/api/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (todos) {
            list.innerHTML = '';
            todos.forEach(function (todo) {
                const li = document.createElement('li');
                li.textContent = todo.text;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', function () {
                    fetch('/api/todos/' + todo.id, { method: 'DELETE' })
                        .then(function () {
                            loadTodos();
                        });
                });

                li.appendChild(deleteBtn);
                list.appendChild(li);
            });
        })
        .catch(function (err) {
            console.error('Load error', err);
        });
}

addBtn.addEventListener('click', function () {
    const text = input.value.trim();
    if (!text) return;
    fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text })
    })
        .then(function () {
            input.value = '';
            loadTodos();
        })
        .catch(function (err) {
            console.error('Add error', err);
        });
});

loadTodos();
