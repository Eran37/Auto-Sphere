import { MongoClient, ServerApiVersion } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function getDb() {
  await client.connect();
  return client.db(process.env.MONGODB_DB_NAME || 'cluster0');
}

export const collections = {
  contacts: 'contacts',
  chatMessages: 'chat_messages',
  companyLogos: 'company_logos'
} as const; 