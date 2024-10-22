import express, { Request, Response } from 'express';
import db from './src/mongodb';
import { FakeData } from './src/helpers';
import { processCsv } from './sensetive-data';

const app = express();
const port: number = 3000;

app.use(express.json({limit: '100000mb'}));

app.post('/notify-users', (_req: Request, res: Response) => {
  res.status(200)
});

app.post('/generate-addresses', async (_req: Request, res: Response) => {
  const addresses = FakeData.generateFakeAddresses(1000)
  await db.collection('addresses').insertMany(addresses)
  
  res.status(200)
});

app.listen(port, () => {
  console.log(`Serving on: ${port}`);
});


processCsv()