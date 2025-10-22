import HomeService from '../service/homeService';

export default {
  displayProductAll: async () => {
    try {
      const result = await HomeService();

      if (result.error) {
        return {
          error: true,
          message: result.message,
          data: null,
        };
      }

      if (!result.error) {
        return {
          error: false,
          message: null,
          data: result.data,
        };
      }
    } catch (erro) {
      return {
        error: true,
        message: 'Ocorreu um erro,tente mais tarde.',
        data: null,
      };
    }
  },
};
