import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Upload file to Supabase Storage with custom filename
export const uploadFileToBucket = async (file, customFileName = null, bucketName = 'jemma brand logos') => {
  if (!file) return null;

  try {
    // Get file extension
    const fileExtension = file.name.split('.').pop();
    
    // Use custom filename with extension or default
    const fileName = customFileName ? `${customFileName}.${fileExtension}` : `${Date.now()}-${file.name}`;
    const filePath = `images/${fileName}`;

    // Upload file
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }

    return {
      path: data.path,
    };
  } catch (error) {
    console.error('File upload error:', error);
    throw error;
  }
};

// Delete file from Supabase Storage
export const deleteFileFromBucket = async (filePath, bucketName = 'jemma brand logos') => {
  try {
    const { error } = await supabase.storage
      .from(bucketName)
      .remove([filePath]);

    if (error) {
      throw new Error(`Delete failed: ${error.message}`);
    }

    return true;
  } catch (error) {
    console.error('File delete error:', error);
    throw error;
  }
};
// Insert form data into Supabase table
export const saveFormToDatabase = async (formData, tableName = 'Brand Details') => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert([formData])
      .select();

    if (error) {
      throw new Error(`Database insert failed: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error('Database save error:', error);
    throw error;
  }
};

// Save email for ebook downloads
export const saveEbookEmail = async (email, tableName = 'Brand Details') => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .insert([{ full_name: 'Ebook Download', email }])
      .select();

    if (error) {
      // Log error but don't throw - allow download to proceed
      console.warn('Ebook email save warning:', error.message);
      return null;
    }

    return data;
  } catch (error) {
    // Gracefully handle errors without blocking download
    console.warn('Ebook email save warning:', error);
    return null;
  }
};