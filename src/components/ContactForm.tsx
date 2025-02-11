import React, { useState } from 'react';
import { Send, Bot, Cog } from 'lucide-react';
import type { ContactForm } from '../types';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    company: '',
    phone: '',
    email: '',
    problem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        problem: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="card-gradient rounded-lg p-8 border border-gray-800 neon-glow">
      <div className="flex items-center justify-center mb-6">
        <Cog className="h-8 w-8 text-[#00f7ff] ml-2" />
        <span className="text-[#00f7ff] font-medium text-xl">נתאים עבורך פתרון אוטומציה מתקדם</span>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              שם מלא
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-[#00f7ff] focus:ring focus:ring-[#00f7ff] focus:ring-opacity-50"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300">
              שם העסק
            </label>
            <input
              type="text"
              name="company"
              id="company"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-[#00f7ff] focus:ring focus:ring-[#00f7ff] focus:ring-opacity-50"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              טלפון
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-[#00f7ff] focus:ring focus:ring-[#00f7ff] focus:ring-opacity-50"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              דוא"ל
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-[#00f7ff] focus:ring focus:ring-[#00f7ff] focus:ring-opacity-50"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-gray-300">
            ספר לנו על תהליכי העבודה שלך
          </label>
          <p className="text-sm text-gray-400 mb-2">המומחים הטכניים שלנו יבצעו ניתוח מקיף של התהליכים ויתאימו פתרון אוטומציה יעיל</p>
          <textarea
            name="problem"
            id="problem"
            rows={3}
            required
            placeholder="תאר את התהליכים העיקריים שהיית רוצה לייעל..."
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-gray-100 shadow-sm focus:border-[#00f7ff] focus:ring focus:ring-[#00f7ff] focus:ring-opacity-50"
            value={formData.problem}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${
              isSubmitting
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#00f7ff] to-[#b400ff] hover:opacity-90'
            } transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00f7ff] neon-glow`}
          >
            {isSubmitting ? (
              'שולח...'
            ) : (
              <>
                <Bot className="h-5 w-5 ml-2" />
                קבל הצעה לפתרון אוטומציה מתקדם
              </>
            )}
          </button>
        </div>

        {submitStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-900 text-green-100 rounded-md text-center">
            הטופס נשלח בהצלחה! המומחים שלנו יצרו איתך קשר בהקדם לניתוח טכני מקיף והתאמת פתרון מדויק.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-900 text-red-100 rounded-md text-center">
            אירעה שגיאה בשליחת הטופס. אנא נסה שוב מאוחר יותר.
          </div>
        )}
      </div>
    </form>
  );
}