import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SliceRate {
  id: number;
  max: number;
}

export interface EventOrderState {
  date: number | null;
  sector: number | null;
  rate: SliceRate | null;
  quantity: number | null;
}

const initialState: EventOrderState = {
  date: null,
  sector: null,
  rate: null,
  quantity: null,
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

    setEventRate: (state, action: PayloadAction<SliceRate>) => {
      state.rate = { ...action.payload };
    },

    setEventQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEventDate, setEventSector, setEventRate, setEventQuantity } =
  eventOrderSlice.actions;

export const { reducer: eventOrderReducer } = eventOrderSlice;
