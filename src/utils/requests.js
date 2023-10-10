import ky from 'ky';

const config = {
  headers: {
    'X-Api-Key': import.meta.env.VITE_DESC_KEY,
  },
};

export const getCarDesc = async () => {
  try {
    const carDesc = await ky
      .get('https://api.api-ninjas.com/v1/cars?limit=2&model=camry', config)
      .json();

    console.log(carDesc);
  } catch (err) {
    console.log(err.message);
  }
};
