export type GetSingleEventResponseDto = SingleEvent;

interface SingleEvent {
  id: number;
  name: string;
  description: string;
  image: string;
  thubm: string;
  similarEvents: SimilarEvent[];
  dates: Date[];
  venue: Venue2;
}

interface Venue2 {
  id: number;
  address: string;
  location: Location;
  name: string;
}

interface Location {
  longitude: string;
  latitude: string;
}

interface Date {
  id: number;
  name: string;
  date: string;
}

interface SimilarEvent {
  id: number;
  name: string;
  thumb: string;
  venue: Venue;
}

interface Venue {
  id: number;
  name: string;
}
