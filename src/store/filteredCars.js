import { createSlice } from '@reduxjs/toolkit';
import { searchKeys } from 'constants/constants.jsx';

const initialState = {
  searchValue: '',
  filteredCars: [],
};

const filteredCarsSlice = createSlice({
  name: 'filteredCars',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload.filter((car) => {
        return searchKeys.some((key) => car[key].toLowerCase().includes(state.searchValue));
      });
    },
  },
});

export const { setSearchValue, setFilteredCars } = filteredCarsSlice.actions;

export default filteredCarsSlice.reducer;
