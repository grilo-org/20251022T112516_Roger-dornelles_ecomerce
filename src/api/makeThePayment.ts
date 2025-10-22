import { PaymentsType } from '@/types/payment';
import ErrorStatus401 from '../hooks/ErrorStatus401';

import makeThePaymentService from '../service/makeThePaymentService';

export default {
  makeThePayment: async ({
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
      let response = await makeThePaymentService({
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
      });

      if (response?.error) {
        return {
          error: true,
          message: response.message,
          data: null,
        };
      }

      if (!response?.error) {
        return {
          error: false,
          message: response?.message,
          data: null,
        };
      }

    } catch (error) {
      ErrorStatus401(error);
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde',
        data: null,
      };
    }
  },
};
