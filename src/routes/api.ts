import { Hono } from 'hono';
import { tasksRoutes } from './api/tasks';

const api = new Hono();

api.route('/tasks', tasksRoutes);

const publicApi = new Hono();
publicApi.route('/public', api);

export { publicApi as apiRoutes };
