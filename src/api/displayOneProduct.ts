import displayOneProductService from '../service/displayOneProductService';

export default {
  displayOneProduct: async (id: string) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Produto não encontrado',
          data: null,
        };
      }

      const response = await displayOneProductService(id);

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
          message: null,
          data: response?.data,
        };
      }
    } catch (error) {
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde',
        data: null,
      };
    }
  },
};
