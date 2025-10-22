import { axiosClient } from '../axios/config';

const installmentListService = async (value: string) => {
  try {
    let installments = await axiosClient({
      url: '/installment',
      method: 'POST',
      data: { valueTotal: value },
    });

    if (installments.data.error) {
      return {
        error: true,
        message: installments.data.message,
        data: null,
      };
    }

    return {
      error: false,
      message: null,
      data: installments.data.data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Ocorreu um erro , tente mais tarde',
      data: null,
    };
  }
};

export default installmentListService;
