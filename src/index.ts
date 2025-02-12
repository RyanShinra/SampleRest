import express from 'express';
import { config } from './config';
import type { AppConfig } from './types';

const app = express();
const port = (config.port as number) || 3000;

app.get('/', (_req, res) => {
  res.json({ message: 'Hello TypeScript!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
