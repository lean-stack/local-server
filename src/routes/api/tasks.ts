import { Hono } from 'hono';

const task = new Hono();

task
  .get('/', (c) => c.json([]))
  .post('/', (c) => c.json({}, 201))
  .get('/:id', (c) => c.json({}))
  .put('/:id', (c) => c.json({}))
  .patch('/:id', (c) => c.json({}))
  .delete('/:id', (c) => c.body(null, 204));

export { task as tasksRoutes };
