import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetEventResponseDto } from './dto/get-events.dto';
import { config } from '../core/config';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.api.host }),
  endpoints: (builder) => ({
    getEvents: builder.query<GetEventResponseDto, unknown>({
      query: () => '/api/event',
    }),
  }),
});

export const { useGetEventsQuery } = eventsApi;
