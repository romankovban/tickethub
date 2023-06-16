import { configureStore } from '@reduxjs/toolkit';
import { eventsApi } from './modules/events/api/repository';
import { eventOrderReducer } from './modules/events/store/slice';

export const store = configureStore({
  reducer: {
    eventOrder: eventOrderReducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
