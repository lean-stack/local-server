import { serve } from '@hono/node-server';

import { app } from './src/app';
import env from './src/env';

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`Server running at http://localhost:${info.port}`);
  },
);
