import { PaymentsType } from '@/types/payment';
import { axiosClient } from '../axios/config';

const makeThePaymentService = async ({
  id,
  total,
  userID,
  numberParcelOfValue,
  numberOfCard,
  securityCode,
  cardName,
  userProductDataOfPurchase,
  deliveryAddress,
  name,
  phone,
  address,
  complement,
  dueDate,
  numberAddress,
}: PaymentsType) => {
  try {
    let payments = await axiosClient({
      url: `/product/purchase/${id}`,
      method: 'POST',
      data: {
        total,
        userID,
        numberParcelOfValue,
        numberOfCard,
        securityCode,
        cardName,
        userProductDataOfPurchase,
        deliveryAddress,
        name,
        phone,
        address,
        complement,
        dueDate,
        numberAddress,
      },
    });

    if (payments.data.error) {
      return {
        error: true,
        message: payments.data.message,
        data: null,
      };
    }

    return {
      error: false,
      message: 'Pagamento efetuado.',
      data: null,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.response.data.message ? error.response.data.message : 'Ocorreu um erro , tente mais tarde',
      data: null,
    };
  }
};

export default makeThePaymentService;
