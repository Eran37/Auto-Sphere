import express from 'express';
import cors from 'cors';
import { getDb } from './db';
import contactRouter from './routes/contact';
import chatRouter from './routes/chat';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRouter);
app.use('/api/chat', chatRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 