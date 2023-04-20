import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.items = [...action.payload];
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
