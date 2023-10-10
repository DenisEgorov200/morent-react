import ky from 'ky';

const config = {
  headers: {
    'X-Api-Key': import.meta.env.VITE_DESC_KEY,
  },
};

export const getCarDesc = async (model) => {
  try {
    const response = await ky.get(`https://api.api-ninjas.com/v1/cars?model=${model}`, config);
    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
