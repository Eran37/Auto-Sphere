import { ObjectId } from 'mongodb';

export interface Contact {
  _id?: ObjectId;
  name: string;
  company: string;
  phone: string;
  email: string;
  problem: string;
  created_at: Date;
  status: string;
}

export interface ChatMessage {
  _id?: ObjectId;
  user_id: string;
  message: string;
  created_at: Date;
  is_bot: boolean;
}

export interface CompanyLogo {
  _id?: ObjectId;
  name: string;
  logo_url: string;
  created_at: Date;
  display_order: number;
} 