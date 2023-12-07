import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCar: {},
};

const currentCar = createSlice({
  name: 'currentCar',
  initialState,
  reducers: {
    setCurrentCar: (state, action) => {
      state.currentCar = action.payload;
    },
  },
});

export const { setCurrentCar } = currentCar.actions;

export default currentCar.reducer;
