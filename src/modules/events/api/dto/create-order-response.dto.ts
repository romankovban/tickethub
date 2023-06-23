export interface CreateOrderResponseDto {
  id: number;
  quantity: number;
  confirmationCode: string;
  rate: Rate;
  user: User;
  card: Card;
  purchaseDate: string;
}

interface Card {
  nameOnCard: string;
  cvv: string;
  expires: string;
  number: string;
}

interface User {
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Rate {
  id: number;
}
