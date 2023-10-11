import ky from 'ky';

const descConfig = {
  headers: {
    'X-Api-Key': import.meta.env.VITE_DESC_KEY,
  },
};
const imgConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

export const getCarDesc = async (model) => {
  try {
    const response = await ky.get(
      `https://api.api-ninjas.com/v1/cars?limit=50&year=2022`,
      descConfig,
    );
    return await response.json();
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
