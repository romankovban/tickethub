import { FC } from 'react';
import { useGetEventsQuery } from '../api/events';
import { EventCard } from './event-card.component';

interface EventsListProps {}

export const EventsList: FC<EventsListProps> = ({}) => {
  const events = useGetEventsQuery({});

  if (events.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="row">
      {events.data?.map((event) => (
        <EventCard key={event.id} eventId={event.id} thumb={event.thumb} />
      ))}
    </div>
  );
};
