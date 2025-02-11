import { Database } from './types/supabase';

export interface Service {
  id: number;
  title: string;
  description: string;
  examples: string[];
  icon: string;
}

export interface ContactForm {
  name: string;
  company: string;
  phone: string;
  email: string;
  problem: string;
}

export interface AutomationPlatform {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  avatar: string;
}