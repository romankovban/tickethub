import { FC } from 'react';
import { EventCard } from './event-card.component';
import { Event } from '../api/dto/get-event-response.dto';
import { SimilarEvent } from '../api/dto/get-single-event-response.dto';

interface EventsListProps {
  events: Event[] | SimilarEvent[];
}

export const EventsList: FC<EventsListProps> = ({ events }) => {
  return (
    <div className="row">
      {events.map((event) => (
        <EventCard
          key={`event-${event.id}`}
          eventId={event.id}
          thumb={event.thumb}
        />
      ))}
    </div>
  );
};
