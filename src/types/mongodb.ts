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
  message: string;
  user_id: string;
  created_at: Date;
  is_bot: boolean;
}

export interface CompanyLogo {
  _id?: ObjectId;
  name: string;
  logo_url: string;
  display_order: number;
}

export interface AutomationPlatform {
  _id?: ObjectId;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  _id?: ObjectId;
  name: string;
  title: string;
  content: string;
  rating: number;
  avatar: string;
} 