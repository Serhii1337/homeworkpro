import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'client')));

let todos = [];
let id = 1;

app.get('/api/todos', function (request, response) {
    response.json(todos);
});

app.post('/api/todos', function (request, response) {
    const text = request.body.text;
    if (!text) {
        response.status(400).json({ error: 'Text required' });
        return;
    }

    const todoItem = { id: id++, text: text };
    todos.push(todoItem);

    response.status(201).json(todoItem);
});

app.delete('/api/todos/:id', function (request, response) {
    const deleteId = Number(request.params.id);
    const beforeCount = todos.length;

    todos = todos.filter(function (item) {
        return item.id !== deleteId;
    });

    if (todos.length === beforeCount) {
        response.status(404).json({ error: 'Not found' });
        return;
    }

    response.json({ ok: true });
});

app.listen(port, function () {
    console.log('Server listening on ' + port);
});
