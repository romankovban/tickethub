export interface InternalEvent {
  id: number;
  thumb: string;
}

export interface EventDates {
  id: number;
  name: string;
  date: string;
}

export interface Location {
  longitude: string;
  latitude: string;
}

export interface Venue {
  id: number;
  address: string;
  location: Location;
  name: string;
}

export interface SingleEvent {
  id: number;
  name: string;
  description: string;
  image: string;
  thumb: string;
  similarEvents: InternalEvent[];
  dates: EventDates[];
  venue: Venue;
}
