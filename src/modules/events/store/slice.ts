import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface EventOrderState {
  date: number | null;
  sector: number | null;
}

const initialState: EventOrderState = {
  date: null,
  sector: null,
};

export const eventOrderSlice = createSlice({
  name: 'eventOrder',
  initialState,
  reducers: {
    setEventDate: (state, action: PayloadAction<number>) => {
      state.date = action.payload;
    },

    setEventSector: (state, action: PayloadAction<number>) => {
      state.sector = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEventDate, setEventSector } = eventOrderSlice.actions;

export const { reducer: eventOrderReducer } = eventOrderSlice;
