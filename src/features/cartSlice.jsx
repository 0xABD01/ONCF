// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('cart');
  return saved ? JSON.parse(saved) : [];
};

const saveToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload.id);
      saveToLocalStorage(newState);
      return newState;
    },
    updateQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      } else if (item && action.payload.quantity <= 0) {
        return state.filter(item => item.id !== action.payload.id);
      }
      saveToLocalStorage(state);
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return [];
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;