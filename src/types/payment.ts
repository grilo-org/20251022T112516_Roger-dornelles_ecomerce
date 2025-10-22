import { NewAddressType } from './user';

export interface PaymentsType {
  total: string;
  userID: number;
  numberParcelOfValue: string | { parcel: string; value: string };
  numberOfCard: string;
  id?: number;
  securityCode: string | number;
  cardName: string;
  userProductDataOfPurchase: UserProductDataOfPurchaseType[];
  deliveryAddress: NewAddressType;
  name: string;
  phone: string;
  address: string;
  complement: string;
  dueDate: string;
  numberAddress: string;
}

export interface UserProductDataOfPurchaseType {
  name: string;
  image: string;
  quantity: string | number;
  value: string;
}
