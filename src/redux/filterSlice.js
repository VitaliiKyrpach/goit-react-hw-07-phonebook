import { createSlice } from '@reduxjs/toolkit';

const filterInitState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    typeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { typeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
