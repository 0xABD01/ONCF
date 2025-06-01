
import { configureStore } from '@reduxjs/toolkit';
import planifierReducer from '../features/planifierSlice';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    planifier: planifierReducer,
    cart: cartReducer,
  },
});