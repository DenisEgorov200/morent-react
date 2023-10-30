import { configureStore } from '@reduxjs/toolkit';
import filteredSlice from '@/store/filteredCars.js';

export const store = configureStore({
  reducer: {
    filteredCars: filteredSlice,
  },
});
