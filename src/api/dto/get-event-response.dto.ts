export type GetEventResponseDto = Event[];

export interface Event {
  id: number;
  name: string;
  thumb: string;
  venue: Venue;
}

export interface Venue {
  id: number;
  name: string;
}
