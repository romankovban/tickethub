import { RootState } from '../../../store';

export const getSelectedDate = (state: RootState) => state.eventOrder.date;

export const getSelectedSector = (state: RootState) => state.eventOrder.sector;

export const getSelectedRate = (state: RootState) => state.eventOrder.rate;

export const getSelectedQuantity = (state: RootState) =>
  state.eventOrder.quantity;
