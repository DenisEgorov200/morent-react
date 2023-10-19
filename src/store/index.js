import { configureStore } from '@reduxjs/toolkit';
import searchSlice from '@/store/searchSlice.js';

export const store = configureStore({
  reducer: {
    search: searchSlice,
  },
});
