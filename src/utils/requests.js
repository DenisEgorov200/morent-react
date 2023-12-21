import { createClient } from '@supabase/supabase-js';

const descConfig = {
  headers: {
    'X-Api-Key': import.meta.env.VITE_DESC_KEY,
  },
};

const supabase = createClient(
  'https://nlyrshjeftvsqrnldgwr.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5seXJzaGplZnR2c3FybmxkZ3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MDU1OTQsImV4cCI6MjAxNzk4MTU5NH0.3QezE38f7A1LX6EJW2G8nPBSVetl3wkAr8RAEwOuVAs',
);

export const getCarDesc = async () => {
  try {
    const { data, error } = await supabase.from('car-description').select('*');

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const generateCarImgUrl = (make, model, year) => {
  const baseURL = new URL('https://cdn.imagin.studio/getimage');

  baseURL.searchParams.append('customer', import.meta.env.VITE_IMG_KEY);
  baseURL.searchParams.append('make', make);
  baseURL.searchParams.append('modelFamily', model.split(' ')[0]);
  baseURL.searchParams.append('modelYear', year);
  baseURL.searchParams.append('zoomType', 'fullscreen');

  return `${baseURL}`;
};
