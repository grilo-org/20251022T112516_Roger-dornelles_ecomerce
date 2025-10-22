import purchasesService from '../service/purchasesService';

export default {
  purchases: async (id: number) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Usuário invalido',
          data: null,
        };
      }

      const response = await purchasesService(id);

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
        message: 'Ocorreu um ero, tente mais tarde',
        data: null,
      };
    }
  },
};
