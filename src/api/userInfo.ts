import userInfoService from '../service/userInfoService';

export default {
  infoAll: async (id: number) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Usuário não encontrado',
          data: null,
        };
      }
      const result = await userInfoService(id);

      if (result.error) {
        return {
          error: true,
          message: result.message,
          data: null,
        };
      }

      return {
        error: false,
        message: null,
        data: result.data,
      };
    } catch (error) {
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde',
        data: null,
      };
    }
  },
};
