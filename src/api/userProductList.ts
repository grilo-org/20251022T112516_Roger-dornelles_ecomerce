import userProductListService from '../service/userProductListService';

export default {
  productList: async (id: number) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Usuário invalido',
          data: null,
        };
      }

      const response = await userProductListService(id);

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
        message: 'Ocorreu um erro, tente mais trde.',
        data: null,
      };
    }
  },
};
