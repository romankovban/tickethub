import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface SliceDate {
  id: number;
  date: string;
}
interface SliceRate {
  id: number;
  max: number;
}

interface SliceSector {
  id: number;
  name: string;
}

export interface EventOrderState {
  date: SliceDate | null;
  sector: SliceSector | null;
  rate: SliceRate | null;
  quantity: number | null;
  eventId: number | null;
  confirmationCode: string | null;
}

const initialState: EventOrderState = {
  date: null,
  sector: null,
  rate: null,
  quantity: null,
  eventId: null,
  confirmationCode: null,
};

export const eventOrderSlice = createSlice({
  name: 'eventOrder',
  initialState,
  reducers: {
    setEventDate: (state, action: PayloadAction<SliceDate | null>) => {
      if (action.payload === null) {
        state.date = null;
        return;
      }

      state.date = { ...action.payload };
    },

    setEventSector: (state, action: PayloadAction<SliceSector | null>) => {
      if (action.payload === null) {
        state.sector = null;
        return;
      }

      state.sector = { ...action.payload };
    },

    setEventRate: (state, action: PayloadAction<SliceRate | null>) => {
      if (action.payload === null) {
        state.rate = null;
        return;
      }

      state.rate = { ...action.payload };
    },

    setEventQuantity: (state, action: PayloadAction<number | null>) => {
      state.quantity = action.payload;
    },

    setEventId: (state, action: PayloadAction<number | null>) => {
      state.eventId = action.payload;
    },

    setConfirmationCode: (state, action: PayloadAction<string | null>) => {
      state.confirmationCode = action.payload;
    },
    cleanEventOrderState: (state) => {
      state.date = null;
      state.sector = null;
      state.rate = null;
      state.quantity = null;
      state.eventId = null;
      state.confirmationCode = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setEventDate,
  setEventSector,
  setEventRate,
  setEventQuantity,
  setEventId,
  setConfirmationCode,
  cleanEventOrderState,
} = eventOrderSlice.actions;

export const { reducer: eventOrderReducer } = eventOrderSlice;
