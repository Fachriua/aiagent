require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Task CRUD
app.get('/api/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post('/api/tasks', async (req, res) => {
  const { title, description, priority, dueDate } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  
  const task = await prisma.task.create({
    data: { title, description, priority, dueDate: dueDate ? new Date(dueDate) : null }
  });
  res.status(201).json(task);
});

app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, dueDate, completed } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, description, priority, dueDate: dueDate ? new Date(dueDate) : null, completed }
    });
    res.json(task);
  } catch (e) {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await prisma.task.delete({ where: { id: parseInt(req.params.id) } });
    res.status(204).send();
  } catch (e) {
    res.status(404).json({ error: 'Task not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));