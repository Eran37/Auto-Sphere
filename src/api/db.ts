import { MongoClient, Db } from 'mongodb';
import type { Contact, ChatMessage } from '../types/mongodb';

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

export async function getContacts() {
  const db = await getDb();
  return db.collection<Contact>(collections.contacts).find().toArray();
}

export async function createContact(contact: Omit<Contact, '_id' | 'created_at'>) {
  const db = await getDb();
  return db.collection<Contact>(collections.contacts).insertOne({
    ...contact,
    created_at: new Date()
  });
}

export async function getChatMessages(userId: string) {
  const db = await getDb();
  return db
    .collection<ChatMessage>(collections.chatMessages)
    .find({ user_id: userId })
    .sort({ created_at: 1 })
    .toArray();
}

// ... similar functions for other operations 