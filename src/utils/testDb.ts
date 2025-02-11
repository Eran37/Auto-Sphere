import * as dotenv from 'dotenv';
dotenv.config();

import { getDb } from '../lib/mongodb';

async function testConnection() {
  try {
    console.log('Trying to connect with URI:', process.env.MONGODB_URI);
    const db = await getDb();
    console.log('Connected successfully to MongoDB!');
    
    // Create the collections if they don't exist
    await db.createCollection('company_logos');
    await db.createCollection('contacts');
    await db.createCollection('chat_messages');
    
    console.log('Collections created successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

testConnection(); 