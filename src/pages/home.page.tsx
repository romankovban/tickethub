import { FC } from 'react';
import { EventCard } from '../components/event-card.component';
import { Link } from 'react-router-dom';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="container">
      <h3>
        <strong>
          <Link to="/">Challenge Tickets</Link>
        </strong>
      </h3>
      <hr />
      <h4>Select an event</h4>
      <hr />
      <div className="row">
        <EventCard
          eventId={1}
          thumb="https://cdn.boletius.com/images/1520277905667-test-pos-All_access_640x640-min.jpg"
        />
      </div>
    </div>
  );
};
