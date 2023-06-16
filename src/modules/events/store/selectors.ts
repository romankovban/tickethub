import { RootState } from '../../../store';

export const getSelectedDate = (state: RootState) => state.eventOrder.date;

export const getSelectedSector = (state: RootState) => state.eventOrder.sector;
