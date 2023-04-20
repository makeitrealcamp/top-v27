import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  message: '',
  type: '',
};

const alertSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.active = action.payload.active;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideAlert: (state, action) => {
      state.active = action.payload.active;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
