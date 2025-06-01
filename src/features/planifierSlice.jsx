import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  depart: '',
  destination: '',
  date: '',
  adultes: 0,
  enfants: 0,
  classe: '',
};

const planifierSlice = createSlice({
  name: 'planifier',
  initialState,
  reducers: {
    setPlanification: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetPlanification: () => initialState,
  },
});

export const { setPlanification, resetPlanification } = planifierSlice.actions;
export default planifierSlice.reducer;
