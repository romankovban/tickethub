import { FC } from 'react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  eventId: number;
  thumb: string;
}

export const EventCard: FC<EventCardProps> = ({ eventId, thumb }) => {
  return (
    <div className="col-sm-3 event-list">
      <Link to={`/event/${eventId}`}>
        <img src={thumb} width="100%" />
      </Link>
    </div>
  );
};
