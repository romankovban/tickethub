import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '../../../core/config';
import { GetEventResponseDto } from './dto/get-event-response.dto';
import { GetSingleEventResponseDto } from './dto/get-single-event-response.dto';
import { GetSectorResponseDto } from './dto/get-sector-response.dto';
import { GetRateBySectorResponseDto } from './dto/get-rate-by-sector-response.dto';
import { CreateOrderResponseDto } from './dto/create-order-response.dto';
import { CreateOrderRequestDto } from './dto/create-order-request.dto';
import { InternalEvent, SingleEvent } from '../domain/event';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.api.host }),
  endpoints: (builder) => ({
    getEvents: builder.query<InternalEvent[], number>({
      query: (page) => `/api/event?page=${page}`,
      transformResponse: (response: GetEventResponseDto) => {
        return response.map<InternalEvent>((event) => ({
          id: event.id,
          thumb: event.thumb,
        }));
      },
    }),
    getSingleEvent: builder.query<SingleEvent, number>({
      query: (id) => `/api/event/${id}`,
      transformResponse: (response: GetSingleEventResponseDto) => {
        return {
          id: response.id,
          name: response.name,
          description: response.description,
          image: response.image,
          thumb: response.thubm,
          similarEvents: response.similarEvents.map<InternalEvent>((event) => ({
            id: event.id,
            thumb: event.thumb,
          })),
          dates: response.dates.map((date) => ({
            id: date.id,
            name: date.name,
            date: date.date,
          })),
          venue: {
            id: response.venue.id,
            address: response.venue.address,
            location: {
              longitude: response.venue.location.longitude,
              latitude: response.venue.location.latitude,
            },
            name: response.venue.name,
          },
        };
      },
    }),

    getSectorByEvent: builder.query<GetSectorResponseDto, number>({
      query: (id) => `/api/eventDate/${id}/sectors`,
    }),

    getRateBySector: builder.query<GetRateBySectorResponseDto, number>({
      query: (id) => `/api/sectors/${id}/rates`,
    }),
    createOrder: builder.mutation<
      CreateOrderResponseDto,
      CreateOrderRequestDto
    >({
      query: (body) => ({
        url: '/api/order',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetSingleEventQuery,
  useLazyGetSectorByEventQuery,
  useLazyGetRateBySectorQuery,
  useCreateOrderMutation,
} = eventsApi;
