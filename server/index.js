import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, phone, email, problem } = req.body;

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        { name, company, phone, email, problem }
      ])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: 'Contact form submitted successfully',
      data
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      error: 'Failed to submit contact form'
    });
  }
});

// Chat messages endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, userId } = req.body;

    const { data, error } = await supabase
      .from('chat_messages')
      .insert([
        { message, user_id: userId }
      ])
      .select();

    if (error) throw error;

    res.status(201).json({
      message: 'Chat message saved successfully',
      data
    });
  } catch (error) {
    console.error('Error saving chat message:', error);
    res.status(500).json({
      error: 'Failed to save chat message'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
});