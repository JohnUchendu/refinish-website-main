// prisma/prisma.config.ts
import 'dotenv/config';
import { defineConfig } from '@prisma/client';

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL, // Connection string now lives here
  },
});