import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Layout } from '../components/layout.component';
import {
  getChosenEventId,
  getSelectedQuantity,
  getSelectedRate,
} from '../modules/events/store/selectors';
import {
  useCreateOrderMutation,
  useGetSingleEventQuery,
} from '../modules/events/api/repository';
import { Input } from '../components/input.component';

interface OrderPageProps {}

const detailsSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().min(3),
  cardholderName: z.string().min(3),
  cardNumber: z.string().min(14).max(16),
  cardExpiration: z.string().min(5).max(5),
  cardCvv: z.string().min(3).max(3),
});

type DetailsSchemaValues = z.infer<typeof detailsSchema>;

export const OrderPage: FC<OrderPageProps> = ({}) => {
  const navigate = useNavigate();

  const chosenEventId = useSelector(getChosenEventId);
  const selectedRate = useSelector(getSelectedRate);
  const selectedQuantity = useSelector(getSelectedQuantity);

  useEffect(() => {
    if (!chosenEventId || !selectedRate || !selectedQuantity) {
      navigate('/', { replace: true });
    }
  }, []);

  const event = useGetSingleEventQuery(chosenEventId || 0, {
    skip: !chosenEventId,
  });

  const [createOrder] = useCreateOrderMutation();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<DetailsSchemaValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      cardholderName: '',
      cardNumber: '',
      cardExpiration: '',
      cardCvv: '',
    },
    resolver: zodResolver(detailsSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const [fistName, ...restName] = data.name.split(' ');
      const lastName = restName.join(' ');

      const order = await createOrder({
        rate: selectedRate!.id,
        quantity: selectedQuantity!,
        card: {
          nameOnCard: data.cardholderName,
          expires: data.cardExpiration,
          number: data.cardNumber,
          cvv: data.cardCvv,
        },
        user: {
          firstName: fistName,
          lastName: lastName,
          email: data.email,
          phone: data.phone,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Layout>
      <h4>Buying tickets for {event.data?.name}</h4>
      <hr />
      <form onSubmit={onSubmit} noValidate>
        <div className="row">
          <div className="col-sm-offset-1 col-sm-10">
            <h4>
              <strong>Your Details</strong>
            </h4>
            <hr />
            <div className="row">
              <div className="col-sm-6">
                <Input
                  label="Name"
                  {...register('name')}
                  error={errors.name?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Email"
                  {...register('email')}
                  error={errors.email?.message}
                  type="email"
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Phone"
                  {...register('phone')}
                  error={errors.phone?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Address"
                  {...register('address')}
                  error={errors.address?.message}
                />
              </div>
            </div>
            <hr />
            <h4>
              <strong>Payment Details</strong>
            </h4>
            <hr />
            <div className="row">
              <div className="col-xs-12">
                <Input
                  label="Cardholder Name"
                  {...register('cardholderName')}
                  error={errors.cardholderName?.message}
                />
              </div>
              <div className="col-sm-6">
                <Input
                  label="Card Number"
                  {...register('cardNumber')}
                  error={errors.cardNumber?.message}
                />
              </div>
              <div className="col-sm-4">
                <Input
                  label="Card Expiration"
                  {...register('cardExpiration')}
                  error={errors.cardExpiration?.message}
                />
              </div>
              <div className="col-sm-2">
                <Input
                  label="CVV"
                  {...register('cardCvv')}
                  error={errors.cardCvv?.message}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <button
              className="btn btn-default btn-block btn-lg"
              onClick={goBack}
            >
              Back
            </button>
          </div>
          <div className="col-xs-6">
            <button
              className="btn btn-primary btn-block btn-lg"
              type="submit"
              disabled={isSubmitting}
            >
              Pay
            </button>
          </div>
        </div>
      </form>
      <hr />
    </Layout>
  );
};
