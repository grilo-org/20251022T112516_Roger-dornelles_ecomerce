export interface Purchase {
  address: string;
  cardName: string;
  complement: string;
  createdAt: string;
  deliveryAddress: DeliveryAddress | DeliveryAddress[];
  dueDate: string;
  id: number;
  lastNumbersOfCard: string;
  name: string;
  numberAddress: string;
  numberOfCard: string;
  numberParcelOfValue: string;
  phone: string;
  securityCode: string;
  total: string;
  updatedAt: string;
  userID: number;
  userProductDataOfPurchase: UserProductDataOfPurchase | UserProductDataOfPurchase[];
}

export interface UserProductDataOfPurchase {
  image: string;
  name: string;
  quantity: number;
  value: string;
  map?: any;
}

export interface DeliveryAddress {
  district: string;
  logradouro: string;
  name: string;
  number: number;
  phone: string;
  state: string;
  map?: any;
}
