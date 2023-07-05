import { FC } from 'react';
import { EventCard } from './event-card.component';
import { InternalEvent } from '../domain/event';

interface EventsListProps {
  events: InternalEvent[];
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
