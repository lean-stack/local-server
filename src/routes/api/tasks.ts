import { Hono } from 'hono';

const task = new Hono();

task.get('/', (c) => c.json([]));

export { task as tasksRoutes };
