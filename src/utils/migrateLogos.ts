import { supabase } from '../lib/supabaseClient';
import { getDb, collections } from '../lib/mongodb';
import { Database } from '../types/supabase';
import * as dotenv from 'dotenv';
dotenv.config();

type CompanyLogo = Database['public']['Tables']['company_logos']['Row'];

async function migrateLogos() {
  try {
    // Get logos from Supabase
    const { data: logos, error } = await supabase
      .from('company_logos')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      throw error;
    }

    // Connect to MongoDB
    const db = await getDb();
    const collection = db.collection(collections.companyLogos);

    // Clear existing logos in MongoDB (optional)
    await collection.deleteMany({});

    // Insert logos to MongoDB
    if (logos && logos.length > 0) {
      const result = await collection.insertMany(
        logos.map((logo: CompanyLogo) => ({
          name: logo.name,
          logo_url: logo.logo_url,
          display_order: logo.display_order,
          created_at: new Date(logo.created_at)
        }))
      );
      console.log(`Migrated ${result.insertedCount} logos successfully!`);
    } else {
      console.log('No logos found in Supabase to migrate');
    }

  } catch (error) {
    console.error('Migration error:', error);
  }
}

migrateLogos(); 