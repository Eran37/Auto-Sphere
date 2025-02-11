import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient(process.env.MONGODB_URI || '');

app.post('/api/contact', async (req, res) => {
  try {
    const db = mongoClient.db(process.env.MONGODB_DB_NAME);
    await db.collection('contacts').insertOne({
      ...req.body,
      created_at: new Date(),
      status: 'new'
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 