import { Hono } from 'hono';
import { apiRoutes } from './routes/api';

const app = new Hono();

app.route('/api', apiRoutes);

export { app };
