import { FC, useEffect, useMemo } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';

interface EventFormProps {}

export const EventForm: FC<EventFormProps> = ({}) => {
  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectedDate = useSelector(getSelectedDate);
  const selectedSector = useSelector(getSelectedSector);
  const selectedRate = useSelector(getSelectedRate);
  const selectedQuantity = useSelector(getSelectedQuantity);

  const event = useGetSingleEventQuery(Number(params.id));

  const [triggerSectorsQuery, sectors] = useLazyGetSectorByEventQuery();
  const [triggerRateQuery, rates] = useLazyGetRateBySectorQuery();

  useEffect(() => {
    triggerSectorsQuery(Number(selectedDate?.id), true);
    triggerRateQuery(Number(selectedSector?.id), true);
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const eventId = Number(e.target.value);
    const eventDate = e.target.options[e.target.selectedIndex].text;
    dispatch(setEventDate({ id: eventId, date: eventDate }));
    dispatch(setEventSector(null));
    dispatch(setEventRate(null));
    dispatch(setEventQuantity(null));

    if (!eventId) return;

    triggerSectorsQuery(eventId);
  };

  const handleSectorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sectorId = Number(e.target.value);
    const sectorName = e.target.options[e.target.selectedIndex].text;
    dispatch(setEventSector({ id: sectorId, name: sectorName }));
    dispatch(setEventRate(null));
    dispatch(setEventQuantity(null));

    if (!sectorId) return;

    triggerRateQuery(sectorId);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rateId = Number(e.target.value);
    const maxQuantity =
      rates.data?.find((rate) => rate.id === rateId)?.max || 0;
    dispatch(setEventRate({ id: rateId, max: maxQuantity }));
    dispatch(setEventQuantity(null));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = Number(e.target.value);
    dispatch(setEventQuantity(quantity));
  };

  const quantityOptions = useMemo(() => {
    return new Array(selectedRate?.max || 0).fill(0);
  }, [selectedRate?.max]);

  const goToCheckout = () => {
    navigate('/order');
  };

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="form-group">
          <select
            className="form-control"
            onChange={handleDateChange}
            value={String(selectedDate?.id)}
          >
            <option value="">Date</option>
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
            value={String(selectedSector?.id)}
          >
            <option value="">Sector</option>
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
            value={String(selectedRate?.id)}
          >
            <option value="">Rate</option>
            {rates.data?.map((rate) => (
              <option key={`rate-${rate.id}`} value={rate.id}>
                {rate.name} | {rate.price}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="form-group">
          <select
            className="form-control"
            disabled={!selectedRate?.id}
            onChange={handleQuantityChange}
            value={String(selectedQuantity)}
          >
            <option value="">Quantity</option>
            {quantityOptions.map((_, index) => (
              <option
                key={`quantity-${selectedRate?.id}-${index}`}
                value={index + 1}
              >
                {index + 1}
              </option>
            ))}
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
          onClick={goToCheckout}
        >
          BUY
        </button>
      </div>
    </div>
  );
};
