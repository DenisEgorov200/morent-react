import { configureStore } from '@reduxjs/toolkit';
import filteredSlice from '@/store/filteredCars.js';
import currentCarSlice from '@/store/currentCar.js';

export const store = configureStore({
  reducer: {
    filteredCars: filteredSlice,
    currentCar: currentCarSlice,
  },
});
