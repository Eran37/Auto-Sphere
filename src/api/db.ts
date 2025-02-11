import { getDb, collections } from '../lib/mongodb';
import type { Contact, ChatMessage, CompanyLogo } from '../types/mongodb';

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