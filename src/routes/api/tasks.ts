import { eq } from 'drizzle-orm';
import { Hono } from 'hono';

import { db } from '../../db';
import { tasks } from '../../db/schema';

const task = new Hono();

task
  .get('/', async (c) => {
    const result = await db.select().from(tasks);
    return c.json(result);
  })
  .post('/', async (c) => {
    const data = await c.req.json();
    const task = await db.insert(tasks).values(data).returning();
    return c.json(task, 201);
  })
  .get('/:id', async (c) => {
    const { id } = c.req.param();
    const [task] = await db.select().from(tasks).where(eq(tasks.id, Number(id)));
    return c.json(task);
  })
  .put('/:id', async (c) => {
    const { id } = c.req.param();
    const data = await c.req.json();
    const task = await db
      .update(tasks)
      .set(data)
      .where(eq(tasks.id, Number(id)))
      .returning();
    return c.json(task);
  })
  .patch('/:id', async (c) => {
    const { id } = c.req.param();
    const data = await c.req.json();
    const task = await db
      .update(tasks)
      .set(data)
      .where(eq(tasks.id, Number(id)))
      .returning();
    return c.json(task);
  })
  .delete('/:id', async (c) => {
    const { id } = c.req.param();
    await db.delete(tasks).where(eq(tasks.id, Number(id)));
    return c.body(null, 204);
  });

export { task as tasksRoutes };
