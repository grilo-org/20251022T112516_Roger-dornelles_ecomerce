import installmentListService from '../service/installmentListService';

export default {
  installmentList: async (value: string) => {
    try {
      if (!value) {
        return {
          error: true,
          message: 'Valor invalido',
          data: null,
        };
      }
      let installment = await installmentListService(value);
  
      if (installment.error) {
        return {
          error: true,
          message: installment.message,
          data: null,
        };
      }
      return {
        error: false,
        message: null,
        data: installment.data,
      };
    } catch (error) {
      return {
        error: true,
        message: 'Ocorreu um erro,tente mais tarde',
        data: null,
      };
    }
  },
};
