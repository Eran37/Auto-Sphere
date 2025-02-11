import { supabase } from '../lib/supabaseClient';

export async function uploadCompanyLogo(file: File, companyName: string) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${companyName.toLowerCase().replace(/\s+/g, '-')}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from('company-logos')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: true
    });

  if (error) {
    throw error;
  }

  const { data: { publicUrl } } = supabase.storage
    .from('company-logos')
    .getPublicUrl(fileName);

  return publicUrl;
} 