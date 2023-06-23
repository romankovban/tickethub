import { FC } from 'react';
import { Layout } from '../components/layout.component';
import { useGetEventsQuery } from '../modules/events/api/repository';
import { EventsList } from '../modules/events/components/events-list.component';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const events = useGetEventsQuery({});

  if (events.isLoading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <h4>Select an event</h4>
      <hr />
      <EventsList events={events.data || []} />
    </Layout>
  );
};
