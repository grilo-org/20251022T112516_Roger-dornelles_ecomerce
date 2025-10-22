import deleteUserService from '../service/deleteUserService';
export default {
  deleteUser: async (id: number) => {
    try {
      if (!id) {
        return {
          error: true,
          message: 'Usuário não encontrado',
          data: null,
        };
      }

      const response = await deleteUserService(id);

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
