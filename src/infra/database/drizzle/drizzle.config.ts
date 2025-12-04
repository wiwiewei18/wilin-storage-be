import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    ssl: false,
  },
  dialect: 'postgresql',
  schema: './src/infra/database/drizzle/schemas/**/*',
  out: './src/infra/database/drizzle/migrations',
});
