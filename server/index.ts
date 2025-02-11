import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: ['https://auto-sphere.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

const mongoClient = new MongoClient(process.env.MONGODB_URI || '');

// Test endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/contact', async (req, res) => {
  try {
    await mongoClient.connect();
    const db = mongoClient.db(process.env.MONGODB_DB_NAME);
    await db.collection('contacts').insertOne({
      ...req.body,
      created_at: new Date(),
      status: 'new'
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  } finally {
    await mongoClient.close();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; 