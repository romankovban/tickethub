import { FC, useEffect } from 'react';
import { Layout } from '../components/layout.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  getChosenEventId,
  getConfirmationCode,
  getSelectedDate,
  getSelectedQuantity,
  getSelectedSector,
} from '../modules/events/store/selectors';
import { useNavigate } from 'react-router-dom';
import { useGetSingleEventQuery } from '../modules/events/api/repository';
import { cleanEventOrderState } from '../modules/events/store/slice';

interface SuccessPageProps {}

export const SuccessPage: FC<SuccessPageProps> = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const chosenEventId = useSelector(getChosenEventId);
  const selectedDate = useSelector(getSelectedDate);
  const selectedSector = useSelector(getSelectedSector);
  const selectedQuantity = useSelector(getSelectedQuantity);
  const confirmationCode = useSelector(getConfirmationCode);

  useEffect(() => {
    if (
      !chosenEventId ||
      !selectedDate ||
      !selectedQuantity ||
      !selectedSector ||
      !confirmationCode
    ) {
      navigate('/', { replace: true });
    }
  }, []);

  useEffect(() => {
    return () => {
      dispatch(cleanEventOrderState());
    };
  }, []);

  const event = useGetSingleEventQuery(chosenEventId || 0, {
    skip: !chosenEventId,
  });

  const eventDate = new Date(selectedDate?.date || 0);
  const eventDateFormatted = new Intl.DateTimeFormat().format(eventDate);

  return (
    <Layout>
      <div className="jumbotron">
        <h3>
          <strong>Congratulations! Order successful</strong>
        </h3>
        <hr />
        <h5>
          <strong>Order Details</strong>
        </h5>
        <hr />
        <div className="media">
          <div className="media-left">
            <img src={event.data?.thumb} width="150" className="media-object" />
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <strong>{event.data?.name}</strong>
            </h4>
            <strong>Where:</strong> {event.data?.venue.name},{' '}
            {event.data?.venue.address}
            <br />
            <strong>When:</strong> {eventDateFormatted}
            <br />
            <strong>Sector:</strong> {selectedSector?.name}
            <br />
            <strong>Quantity:</strong> {selectedQuantity}
            <br />
            <strong>Confirmation Code:</strong> {confirmationCode}
          </div>
        </div>
        <hr />
        <div className="text-right">
          <a className="btn btn-primary btn-lg" href="index.html" role="button">
            Back to home
          </a>
        </div>
      </div>
    </Layout>
  );
};
