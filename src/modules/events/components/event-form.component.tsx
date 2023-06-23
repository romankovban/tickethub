import { FC } from 'react';
import {
  useGetSingleEventQuery,
  useLazyGetRateBySectorQuery,
  useLazyGetSectorByEventQuery,
} from '../api/repository';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEventDate,
  setEventQuantity,
  setEventRate,
  setEventSector,
} from '../store/slice';
import {
  getSelectedDate,
  getSelectedQuantity,
  getSelectedRate,
  getSelectedSector,
} from '../store/selectors';
import { useParams } from 'react-router-dom';

interface EventFormProps {}

export const EventForm: FC<EventFormProps> = ({}) => {
  const params = useParams();

  const event = useGetSingleEventQuery(Number(params.id));

  const [triggerSectorsQuery, sectors] = useLazyGetSectorByEventQuery();
  const [triggerRateQuery, rates] = useLazyGetRateBySectorQuery();

  const dispatch = useDispatch();
  const selectedDate = useSelector(getSelectedDate);
  const selectedSector = useSelector(getSelectedSector);
  const selectedRate = useSelector(getSelectedRate);
  const selectedQuantity = useSelector(getSelectedQuantity);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = Number(e.target.value);
    dispatch(setEventDate(eventId));

    if (!eventId) return;

    triggerSectorsQuery(eventId);
  };

  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sectorId = Number(e.target.value);
    dispatch(setEventSector(sectorId));

    if (!sectorId) return;

    triggerRateQuery(sectorId);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rateId = Number(e.target.value);
    dispatch(setEventRate(rateId));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = Number(e.target.value);
    dispatch(setEventQuantity(quantity));
  };
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleDateChange}
            value={String(selectedDate)}
          >
            <option value="null">Date</option>
            {event.data?.dates.map((date) => (
              <option key={`event-date-${date.id}`} value={date.id}>
                {date.date}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="form-group">
          <select
            className="form-control"
            disabled={!selectedDate}
            onChange={handleSectorChange}
            value={String(selectedSector)}
          >
            <option value="null">Sector</option>
            {sectors.data?.map((sector) => (
              <option key={`sector-${sector.id}`} value={sector.id}>
                {sector.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="form-group">
          <select
            className="form-control"
            disabled={!selectedSector}
            onChange={handleRateChange}
            value={String(selectedRate)}
          >
            <option value="null">Rate</option>
            {rates.data?.map((rate) => (
              <option key={`rate-${rate.id}`} value={rate.id}>
                {rate.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="form-group">
          <select
            className="form-control"
            disabled={!selectedRate}
            onChange={handleQuantityChange}
            value={String(selectedQuantity)}
          >
            <option value="">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <button
          className="btn btn-primary btn-block"
          disabled={
            !selectedDate ||
            !selectedSector ||
            !selectedRate ||
            !selectedQuantity
          }
        >
          BUY
        </button>
      </div>
    </div>
  );
};
