import { configureStore } from '@reduxjs/toolkit';
import alertsSlice from './alerts/alertsSlice';
import cartSlice from './cart/cartSlice';
import productsSlice from './products/productsSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    alerts: alertsSlice,
    products: productsSlice,
  },
});

export default store;
