import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '../components/layout.component';
import { useGetSingleEventQuery } from '../modules/events/api/repository';

import { EventForm } from '../modules/events/components/event-form.component';
import { EventsList } from '../modules/events/components/events-list.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanEventOrderState,
  setEventId,
} from '../modules/events/store/slice';
import { getChosenEventId } from '../modules/events/store/selectors';

interface EventPageProps {}

export const EventPage: FC<EventPageProps> = ({}) => {
  const params = useParams();
  const eventId = Number(params.id);

  const dispatch = useDispatch();

  const event = useGetSingleEventQuery(eventId);
  const chosenEventId = useSelector(getChosenEventId);

  useEffect(() => {
    const initEventPage = async () => {
      if (eventId !== chosenEventId) {
        await dispatch(cleanEventOrderState());
        dispatch(setEventId(eventId));
      }
    };

    initEventPage();
  }, [eventId, chosenEventId]);

  if (event.isLoading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }

  return (
    <div className="container">
      <h3>
        <strong>
          <Link to="/">Challenge Tickets</Link>
        </strong>
      </h3>
      <hr />
      <h4>{event.data?.name}</h4>
      <hr />
      <img src={event.data?.image} width="100%" />
      <hr />
      <h5>
        <strong>Buy Tickets</strong>
      </h5>
      <EventForm />
      <hr />
      <div className="row">
        <div className="col-sm-7">
          <h4>
            <strong>Event Description</strong>
          </h4>
          <p>{event.data?.description}</p>
        </div>
        <div className="col-sm-offset-1 col-sm-4">
          <h4>
            <strong>Where</strong>
          </h4>
          <p>
            <strong>{event.data?.venue.name}</strong>
            <br />
            {event.data?.venue.address}
          </p>
        </div>
      </div>
      <hr />
      <h4>Similar Events</h4>
      <hr />
      <EventsList events={event.data?.similarEvents || []} />
    </div>
  );
};
