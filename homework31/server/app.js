import express, { response } from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { projectsMock } from './mockData/projects.js';
import { tasksData } from './mockData/tasks.js';

const app = express();
app.use(express.json());
app.use(cors());

// Simple in-memory auth token for demo purposes
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'faketoken123';

function requireAuth(req, res, next) {
  const auth = req.get('authorization') || '';
  const expected = 'Bearer ' + AUTH_TOKEN;
  if (auth === expected) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

// Basic login endpoint - returns a demo token for correct credentials
app.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  // Demo credentials: admin / password
  if (username === 'admin' && password === 'password') {
    return res.json({ token: AUTH_TOKEN });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/projects', requireAuth, (request, response) => {
  return response.json(projectsMock);
});

app.post('/projects', (request, response) => {
  const data = request.body;
  const newProject = {
    id: uuidv4(),
    ...data,
  };
  projectsMock.push(newProject);
  return response.send(newProject);
})

app.get('/tasks', requireAuth, (request, response) => {
  return response.json(tasksData);
});

app.get('/tasks/:projectId', (request, response) => {
  const { projectId } = request.params;
  const filtered = tasksData.filter((t) => t.projectId === projectId);
  return response.json(filtered);
});

// Delete project by id (modify in-memory mock)
app.delete('/projects/:id', requireAuth, (req, res) => {
  const { id } = req.params;
  const idx = projectsMock.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Project not found' });
  const removed = projectsMock.splice(idx, 1)[0];
  return res.json({ success: true, project: removed });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});