import 'dotenv/config';
import * as v from 'valibot';

const envSchema = v.object({
  PORT: v.pipe(v.string(), v.transform(Number)),
});

const env = v.parse(envSchema, process.env);

export default env;
