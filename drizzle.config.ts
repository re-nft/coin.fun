import { defineConfig } from 'drizzle-kit';

if (!process.env.DB_URL) throw new Error('No DB_URL in env.');

export default defineConfig({
  dbCredentials: { url: process.env.DB_URL },
  dialect: 'postgresql',
  out: './drizzle',
  schema: './src/lib/server/schema.ts',
  schemaFilter: ['public']
});
