import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

let cachedDb: Db | null = null;

export const collections = {
  companyLogos: 'company_logos',
  contacts: 'contacts',
  chatMessages: 'chat_messages'
} as const;

export async function getDb(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI || '');
  const db = client.db(process.env.MONGODB_DB_NAME);
  cachedDb = db;
  return db;
} 