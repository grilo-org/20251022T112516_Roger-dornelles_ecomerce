import updateUserService from '../service/updateUserService';

export type UserDataType = {
  id: number;
  userData: {
    name?: string;
    password?: string;
    email?: string;
    contact?: string;
    logradouro?: string;
    number?: string;
    state?: string;
  };
};

export default {
  updateUser: async ({ id, userData }: UserDataType) => {
    try {
      const response = await updateUserService({ id, userData });

      if (response?.error) {
        return {
          error: true,
          message: response.message,
          data: null,
        };
      }

      return {
        error: false,
        message: response.message,
        data: response?.data,
      };
    } catch (error) {
      return {
        error: true,
        message: 'Ocorreu um erro, tente mais tarde.',
        data: null,
      };
    }
  },
};
